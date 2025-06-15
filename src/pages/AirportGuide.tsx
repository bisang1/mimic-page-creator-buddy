
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Futbol, Megaphone } from "lucide-react";

const stadiums = [
  {
    name: "서울월드컵경기장",
    capacity: "66,704석",
    team: "FC서울",
    url: "https://www.sisul.or.kr/open_content/worldcup/",
    icon: "⚽",
  },
  {
    name: "수원월드컵경기장",
    capacity: "44,031석",
    team: "수원삼성",
    url: "http://www.suwonworldcup.or.kr/",
    icon: "🏟️",
  },
  {
    name: "인천축구전용경기장",
    capacity: "20,891석",
    team: "인천유나이티드",
    url: "https://www.incheonutd.com/stadium/sunui_stadium.php",
    icon: "💙",
  },
  {
    name: "창원축구센터",
    capacity: "35,000석",
    team: "경남FC",
    url: "http://cwfmc.or.kr/football/main/main.aspx",
    icon: "🟢",
  },
  {
    name: "대전월드컵경기장",
    capacity: "40,535석",
    team: "대전하나시티즌",
    url: "https://www.djsiseol.or.kr/portal/worldcup/main/main.do",
    icon: "🟢",
  },
    {
    name: "광주월드컵경기장",
    capacity: "40,245석",
    team: "광주FC",
    url: "https://www.gwangju-fc.com/stadium/worldcup.php",
    icon: "🔴",
  },
];

const AirportGuide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Futbol className="w-10 h-10 text-primary" />
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

        <section>
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">전국 주요 축구장</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stadiums.map((stadium) => (
              <a href={stadium.url} target="_blank" rel="noopener noreferrer" key={stadium.name} className="block hover:scale-105 transition-transform duration-300 group">
                <Card className="h-full bg-white/60 backdrop-blur-sm border-2 border-blue-200/50 group-hover:border-blue-400 group-hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <CardHeader className="items-center text-center">
                    <div className="text-4xl mb-2">{stadium.icon}</div>
                    <CardTitle className="text-xl font-bold text-gray-800">{stadium.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-lg font-semibold text-gray-600">{stadium.capacity}</p>
                    <div className="mt-4 bg-gray-200/70 rounded-full px-4 py-1.5 inline-block">
                       <p className="text-base font-medium text-gray-700">{stadium.team}</p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </section>

        <footer className="text-center mt-16 text-sm text-gray-500">
          <p>※ 각 경기장 홈페이지에서 더 자세한 정보(교통, 예매 등)를 확인하세요.</p>
        </footer>
      </div>
    </div>
  );
};

export default AirportGuide;
