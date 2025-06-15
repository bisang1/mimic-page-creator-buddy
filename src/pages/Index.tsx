
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Clock, PenSquare } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            스포츠 정보 포털
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            대한민국 스포츠 시설과 정보를 한눈에 확인하세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="text-2xl">⚽</div>
                축구장 안내
              </CardTitle>
              <CardDescription>
                전국 축구장 정보와 예약 가이드
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                대한민국 주요 축구장들의 정보, 예약 방법, 교통편을 확인할 수 있습니다.
              </p>
              <Link to="/airport-guide">
                <Button className="w-full">
                  축구장 안내 보기
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-green-600" />
                카드 혜택 안내
              </CardTitle>
              <CardDescription>
                인기 카드 추천 및 이벤트 정보
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                주요 카드사별 인기 카드, 특별 할인 및 이벤트 정보를 모아보세요.
              </p>
              <Link to="/credit-card-guide">
                <Button className="w-full">
                  카드 정보 보기
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-600" />
                경기 일정
              </CardTitle>
              <CardDescription>
                실시간 경기 및 예약 정보
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                실시간 경기 일정과 시설 예약 현황을 확인하세요.
              </p>
              <Link to="/match-schedule">
                <Button className="w-full">
                  경기 일정 보기
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PenSquare className="w-5 h-5 text-blue-600" />
                온라인 글쓰기 플랫폼
              </CardTitle>
              <CardDescription>
                글쓰기, 독서, 커뮤니티를 한번에
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                새로운 글쓰기 플랫폼 Blomi를 경험해보세요.
              </p>
              <Link to="/blomi">
                <Button className="w-full">
                  Blomi 바로가기
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm">
            더 많은 스포츠 시설 정보가 곧 추가될 예정입니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
