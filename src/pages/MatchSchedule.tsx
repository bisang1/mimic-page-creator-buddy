
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, Link as LinkIcon } from "lucide-react";

const MatchSchedule = () => {
  const scheduleData = [
    {
      date: "2025-06-21",
      time: "19:00",
      league: "K리그1",
      match: "울산 현대 vs 전북 현대",
      venue: "울산문수축구경기장",
      status: "경기 예정",
      statusVariant: "secondary",
      url: "https://www.kleague.com/schedule",
    },
    {
      date: "2025-06-21",
      time: "19:30",
      league: "K리그1",
      match: "FC 서울 vs 수원 FC",
      venue: "서울월드컵경기장",
      status: "경기 예정",
      statusVariant: "secondary",
      url: "https://www.kleague.com/schedule",
    },
    {
      date: "2025-06-22",
      time: "18:00",
      league: "K리그1",
      match: "포항 스틸러스 vs 김천 상무",
      venue: "포항스틸야드",
      status: "경기 예정",
      statusVariant: "secondary",
      url: "https://www.kleague.com/schedule",
    },
    {
      date: "2025-06-21",
      time: "18:30",
      league: "KBO",
      match: "LG 트윈스 vs KT 위즈",
      venue: "서울종합운동장 야구장",
      status: "경기 예정",
      statusVariant: "secondary",
    },
    {
      date: "2025-06-21",
      time: "18:30",
      league: "KBO",
      match: "두산 베어스 vs NC 다이노스",
      venue: "창원NC파크",
      status: "경기 예정",
      statusVariant: "secondary",
    },
    {
      date: "2025-06-22",
      time: "17:00",
      league: "KBO",
      match: "KIA 타이거즈 vs 한화 이글스",
      venue: "광주기아챔피언스필드",
      status: "경기 예정",
      statusVariant: "secondary",
    },
     {
      date: "2025-06-15",
      time: "14:00",
      league: "KBO",
      match: "롯데 자이언츠 vs 키움 히어로즈",
      venue: "고척스카이돔",
      status: "경기 종료",
      statusVariant: "outline",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Calendar className="w-10 h-10 text-primary" />
            주요 경기 일정
          </h1>
          <p className="text-lg text-gray-600">
            K리그와 KBO의 최신 경기 일정을 확인하세요.
          </p>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>경기 목록</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="hidden md:table-cell">날짜</TableHead>
                  <TableHead className="hidden md:table-cell">시간</TableHead>
                  <TableHead>리그</TableHead>
                  <TableHead>경기</TableHead>
                  <TableHead className="hidden sm:table-cell">장소</TableHead>
                  <TableHead className="text-right">상태</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {scheduleData.map((game, index) => (
                  <TableRow key={index} className="hover:bg-muted/20">
                    <TableCell className="hidden md:table-cell font-medium">{game.date}</TableCell>
                    <TableCell className="hidden md:table-cell">{game.time}</TableCell>
                    <TableCell>
                      <Badge variant={game.league === 'K리그1' ? 'default' : 'destructive'}>{game.league}</Badge>
                    </TableCell>
                    <TableCell className="font-semibold">
                      <div className="flex items-center gap-2">
                        {game.match}
                        {game.url && (
                          <a href={game.url} target="_blank" rel="noopener noreferrer" title="자세히 보기">
                            <LinkIcon className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                          </a>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell text-gray-600">{game.venue}</TableCell>
                    <TableCell className="text-right">
                      <Badge variant={game.statusVariant as any}>{game.status}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <footer className="text-center mt-16 text-sm text-gray-500">
          <p>※ 경기 일정 및 중계 채널은 방송사 사정에 따라 변경될 수 있습니다.</p>
          <p>※ 현장 관람 및 예매 정보는 각 구단 공식 홈페이지를 확인해주세요.</p>
        </footer>
      </div>
    </div>
  );
};

export default MatchSchedule;
