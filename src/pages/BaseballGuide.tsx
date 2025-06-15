import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, MapPin, CarFront, User, Ticket, TrainFront } from "lucide-react";

const teamsData = [
  {
    name: "LG 트윈스",
    stadium: "서울종합운동장 야구장 (잠실 야구장)",
    manager: "염경엽",
    ticketing: "https://www.ticketlink.co.kr/sports/baseball/59",
    transport: "지하철 2, 9호선 종합운동장역 5, 6번 출구. 주차 가능하나 매우 혼잡하므로 대중교통 이용 권장.",
  },
  {
    name: "두산 베어스",
    stadium: "서울종합운동장 야구장 (잠실 야구장)",
    manager: "이승엽",
    ticketing: "https://www.ticketlink.co.kr/sports/baseball/58",
    transport: "지하철 2, 9호선 종합운동장역 5, 6번 출구. 주차 가능하나 매우 혼잡하므로 대중교통 이용 권장.",
  },
  {
    name: "KT 위즈",
    stadium: "수원 KT 위즈 파크",
    manager: "이강철",
    ticketing: "https://www.ticketlink.co.kr/sports/baseball/62",
    transport: "수원역에서 버스 이용. 주차장 이용 가능.",
  },
  {
    name: "SSG 랜더스",
    stadium: "인천 SSG 랜더스필드",
    manager: "이숭용",
    ticketing: "https://www.ticketlink.co.kr/sports/baseball/66",
    transport: "인천 지하철 1호선 문학경기장역 2번 출구. 주차장 이용 가능.",
  },
  {
    name: "NC 다이노스",
    stadium: "창원NC파크",
    manager: "강인권",
    ticketing: "https://www.ticketlink.co.kr/sports/baseball/65",
    transport: "창원역, 마산역에서 버스 이용. 주차장 이용 가능.",
  },
  {
    name: "KIA 타이거즈",
    stadium: "광주-기아 챔피언스 필드",
    manager: "이범호",
    ticketing: "https://www.ticketlink.co.kr/sports/baseball/60",
    transport: "광주송정역에서 버스 이용. 주차장 이용 가능.",
  },
  {
    name: "롯데 자이언츠",
    stadium: "사직 야구장",
    manager: "김태형",
    ticketing: "https://www.ticketlink.co.kr/sports/baseball/63",
    transport: "부산 지하철 3호선 종합운동장역 또는 사직역. 주차장 이용 가능.",
  },
  {
    name: "삼성 라이온즈",
    stadium: "대구 삼성 라이온즈 파크",
    manager: "박진만",
    ticketing: "https://www.ticketlink.co.kr/sports/baseball/64",
    transport: "대구 지하철 2호선 대공원역 4, 5번 출구. 주차장 이용 가능.",
  },
  {
    name: "한화 이글스",
    stadium: "대전 한화생명 이글스파크",
    manager: "김경문",
    ticketing: "https://www.ticketlink.co.kr/sports/baseball/61",
    transport: "대전역에서 버스 이용. 주차장 협소, 대중교통 권장.",
  },
  {
    name: "키움 히어로즈",
    stadium: "고척스카이돔",
    manager: "홍원기",
    ticketing: "https://www.ticketlink.co.kr/sports/baseball/67",
    transport: "지하철 1호선 구일역 2번 출구. 주차 공간이 거의 없으므로 반드시 대중교통 이용.",
  },
];

const BaseballGuide = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Trophy className="w-10 h-10 text-primary" />
            KBO 리그 구장 안내
          </h1>
          <p className="text-lg text-gray-600">
            대한민국 프로야구 팀별 구장 정보, 예매, 교통 정보를 확인하세요.
          </p>
        </header>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>팀별 정보</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {teamsData.map((team) => (
                <AccordionItem value={team.name} key={team.name}>
                  <AccordionTrigger className="text-lg hover:no-underline">
                    <div className="flex items-center gap-3">
                      <Trophy className="w-6 h-6" />
                      {team.name}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-4 px-5 bg-slate-50 dark:bg-slate-900/50 rounded-b-md">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <User className="w-5 h-5 text-muted-foreground" />
                        <p className="text-sm font-medium leading-none w-20">감독</p>
                        <p className="text-sm text-muted-foreground">{team.manager}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                        <div>
                          <p className="text-sm font-medium leading-none">홈구장</p>
                          <p className="text-sm text-muted-foreground pt-1">{team.stadium}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CarFront className="w-5 h-5 text-muted-foreground mt-0.5" />
                        <div>
                          <p className="text-sm font-medium leading-none">교통/주차</p>
                          <p className="text-sm text-muted-foreground pt-1">{team.transport}</p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800">
                      <a href={team.ticketing} target="_blank" rel="noopener noreferrer">
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
        
        <Card>
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

        <footer className="text-center mt-12 text-sm text-gray-500">
          <p>※ 예매 정보 및 경기 일정은 구단 사정에 따라 변경될 수 있습니다.</p>
        </footer>
      </div>
    </div>
  );
};

export default BaseballGuide;
