import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Flag, Users, Baseball } from "lucide-react";

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
                <Baseball className="w-5 h-5 text-red-600" />
                야구장 안내
              </CardTitle>
              <CardDescription>
                KBO 리그 구장 및 팀 정보
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                전국 야구장 정보, 팀별 감독, 예매, 교통 정보를 확인하세요.
              </p>
              <Link to="/baseball-guide">
                <Button className="w-full">
                  야구장 정보 보기
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Flag className="w-5 h-5 text-purple-600" />
                축구 경기 일정
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
                  축구 경기 일정 보기
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-600" />
                교육청 정보
              </CardTitle>
              <CardDescription>
                전국 교육청 정보 및 민원 안내
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                지역별 교육청 정보, 스승찾기, 민원, 신고 서비스를 이용하세요.
              </p>
              <Link to="/education-info">
                <Button className="w-full">
                  교육 정보 보기
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
