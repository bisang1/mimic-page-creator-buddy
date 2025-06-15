
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, MapPin, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            여행 정보 포털
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            대한민국 공항과 여행 정보를 한눈에 확인하세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plane className="w-5 h-5 text-blue-600" />
                공항 안내
              </CardTitle>
              <CardDescription>
                전국 공항 정보와 여행 가이드
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                대한민국 주요 공항들의 실시간 정보, 교통편, 편의시설을 확인할 수 있습니다.
              </p>
              <Link to="/airport-guide">
                <Button className="w-full">
                  공항 안내 보기
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-600" />
                여행지 정보
              </CardTitle>
              <CardDescription>
                인기 여행지와 관광 명소
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                국내외 인기 여행지의 상세 정보와 여행 팁을 제공합니다.
              </p>
              <Button variant="outline" className="w-full" disabled>
                준비 중
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-600" />
                실시간 정보
              </CardTitle>
              <CardDescription>
                항공편 및 교통 정보
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                실시간 항공편 스케줄과 대중교통 정보를 확인하세요.
              </p>
              <Button variant="outline" className="w-full" disabled>
                준비 중
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm">
            더 많은 기능들이 곧 추가될 예정입니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
