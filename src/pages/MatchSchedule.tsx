
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, ExternalLink } from "lucide-react";

const MatchSchedule = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Calendar className="w-10 h-10 text-primary" />
            주요 경기 일정
          </h1>
          <p className="text-lg text-gray-600">
            K리그와 KBO의 최신 경기 일정을 공식 홈페이지에서 확인하세요.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span role="img" aria-label="soccer ball" className="text-2xl">⚽</span>
                K리그
              </CardTitle>
              <CardDescription>
                K리그 공식 홈페이지에서 전체 경기 일정을 확인하세요.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="https://www.kleague.com/schedule"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full">
                  K리그 일정 보러가기
                  <ExternalLink className="ml-2" />
                </Button>
              </a>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span role="img" aria-label="baseball" className="text-2xl">⚾</span>
                KBO
              </CardTitle>
              <CardDescription>
                KBO 공식 홈페이지에서 전체 경기 일정을 확인하세요.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="https://www.koreabaseball.com/Schedule/Schedule.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full">
                  KBO 일정 보러가기
                  <ExternalLink className="ml-2" />
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        <footer className="text-center mt-16 text-sm text-gray-500">
          <p>※ 경기 일정 및 중계 채널은 방송사 사정에 따라 변경될 수 있습니다.</p>
          <p>※ 현장 관람 및 예매 정보는 각 구단 공식 홈페이지를 확인해주세요.</p>
        </footer>
      </div>
    </div>
  );
};

export default MatchSchedule;
