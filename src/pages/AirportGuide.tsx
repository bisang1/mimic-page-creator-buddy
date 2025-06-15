import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Megaphone, User, CarFront, Ticket, TrainFront } from "lucide-react";

const stadiums = [
  {
    name: "서울월드컵경기장",
    capacity: "66,704석",
    team: "FC서울",
    manager: "김기동",
    ticketing: "https://www.ticketlink.co.kr/sports/football/event/84",
    transport: "지하철 6호선 월드컵경기장역 1, 2번 출구. 주차 가능하나 혼잡하므로 대중교통 권장.",
    icon: "⚽",
  },
  {
    name: "수원월드컵경기장",
    capacity: "44,031석",
    team: "수원삼성 블루윙즈",
    manager: "변성환",
    ticketing: "https://www.ticketlink.co.kr/sports/football/event/87",
    transport: "수원역에서 버스 이용. 주차장 이용 가능.",
    icon: "🏟️",
  },
  {
    name: "인천축구전용경기장",
    capacity: "20,891석",
    team: "인천유나이티드",
    manager: "조성환",
    ticketing: "https://www.ticketlink.co.kr/sports/football/event/86",
    transport: "인천 지하철 1호선 도원역. 주차장 협소.",
    icon: "💙",
  },
  {
    name: "창원축구센터",
    capacity: "15,074석",
    team: "경남FC",
    manager: "박동혁",
    ticketing: "https://www.ticketlink.co.kr/sports/football/event/106",
    transport: "창원중앙역, 마산역에서 버스 이용. 주차장 이용 가능.",
    icon: "🟢",
  },
  {
    name: "대전월드컵경기장",
    capacity: "40,535석",
    team: "대전하나시티즌",
    manager: "황선홍",
    ticketing: "https://www.ticketlink.co.kr/sports/football/event/85",
    transport: "대전 지하철 1호선 월드컵경기장역. 주차장 이용 가능.",
    icon: "🟣",
  },
  {
    name: "광주축구전용구장",
    capacity: "10,007석",
    team: "광주FC",
    manager: "이정효",
    ticketing: "https://www.ticketlink.co.kr/sports/football/event/83",
    transport: "광주공항역, 송정공원역 인근. 대중교통 이용 권장.",
    icon: "🔴",
  },
];

const AirportGuide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <span role="img" aria-label="soccer ball" className="text-4xl">⚽</span>
            대한민국 축구장 안내
          </h1>
          <p className="text-lg text-gray-600">
            전국 축구장 정보와 예약을 한눈에 확인하세요
          </p>
        </header>

        <div className="mb-12 border-2 border-dashed border-blue-300 rounded-lg p-6 text-center bg-blue-50/50">
          <Megaphone className="w-8 h-8 mx-auto text-blue-500 mb-2" />
          <h2 className="text-lg font-semibold text-blue-800">광고 영역</h2>
          <p className="text-sm text-blue-600">축구용품 할인 정보를 여기에 삽입하세요</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>전국 주요 축구장</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {stadiums.map((stadium) => (
                <AccordionItem value={stadium.name} key={stadium.name} className="border rounded-lg mb-2 overflow-hidden shadow-sm transition-shadow hover:shadow-md">
                  <AccordionTrigger className="text-lg hover:no-underline px-6 py-4 data-[state=closed]:hover:bg-slate-50 dark:data-[state=closed]:hover:bg-slate-800/50 data-[state=open]:border-b">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{stadium.icon}</span>
                      <div>
                        <span className="font-semibold">{stadium.name}</span>
                        <p className="text-sm text-gray-500 font-normal">{stadium.team}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-4 px-6 bg-slate-50 dark:bg-slate-900/50">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <User className="w-5 h-5 text-muted-foreground" />
                        <p className="text-sm font-medium leading-none w-20">감독</p>
                        <p className="text-sm text-muted-foreground">{stadium.manager}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CarFront className="w-5 h-5 text-muted-foreground mt-0.5" />
                        <div>
                          <p className="text-sm font-medium leading-none">교통/주차</p>
                          <p className="text-sm text-muted-foreground pt-1">{stadium.transport}</p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800">
                      <a href={stadium.ticketing} target="_blank" rel="noopener noreferrer">
                        <Button variant="secondary" className="w-full sm:w-auto">
                          <Ticket />
                          예매 바로가기
                        </Button>
                      </a>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <Card className="mt-8">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <TrainFront />
                    KTX 기차 예매
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                    타 지역으로의 이동은 KTX를 이용하시면 편리합니다. 코레일 웹사이트에서 기차 시간을 확인하고 예매하세요.
                </p>
                <a href="https://www.letskorail.com/" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full">
                        코레일(LetsKorail) 바로가기
                    </Button>
                </a>
            </CardContent>
        </Card>

        <footer className="text-center mt-16 text-sm text-gray-500">
          <p>※ 각 경기장 홈페이지에서 더 자세한 정보(교통, 예매 등)를 확인하세요.</p>
        </footer>
      </div>
    </div>
  );
};

export default AirportGuide;
