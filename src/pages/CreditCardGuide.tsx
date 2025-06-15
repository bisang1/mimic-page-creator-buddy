
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, CreditCard } from "lucide-react";

const CreditCardGuide = () => {
  const cardCompanies = [
    {
      name: "신한카드",
      logoColor: "text-blue-600",
      cards: [
        {
          name: "Deep Dream Platinum+",
          benefits: ["전월 실적/적립 한도 없이 0.8%~1.1% 적립", "가장 많이 쓴 영역 3.3%~5.5% 자동 적립"],
          event: "온라인 신규 발급 시 연회비 100% 캐시백",
        },
        {
          name: "Mr.Life",
          benefits: ["공과금 및 통신요금 10% 할인", "편의점, 병원, 약국, 세탁비 10% 할인"],
        },
      ],
      contact: "1544-7000",
    },
    {
      name: "삼성카드",
      logoColor: "text-blue-800",
      cards: [
        {
          name: "taptap O",
          benefits: ["온라인 쇼핑 20% 할인", "배달앱/커피/편의점 10% 할인"],
          event: "대상 가맹점 5만원 이상 결제 시 1만원 캐시백 (월 1회)",
        },
        {
          name: "ID ON",
          benefits: ["교통, 통신, 커피 10% 할인", "온라인 간편결제 1% 할인"],
        },
      ],
      contact: "1588-8700",
    },
    {
      name: "KB국민카드",
      logoColor: "text-yellow-500",
      cards: [
        {
          name: "My WE:SH 카드",
          benefits: ["KB Pay 결제 시 10% 할인", "음식점, 편의점 등 10% 할인"],
          event: "2025년 7월 31일까지 이용금액 충족 시 연회비 캐시백",
        },
      ],
      contact: "1588-1688",
    },
    {
      name: "현대카드",
      logoColor: "text-black",
      cards: [
        {
          name: "the Pink",
          benefits: ["백화점, 프리미엄 아울렛 등 5% 적립", "고메/호텔/뷰티 등 스페셜 바우처 제공"],
        },
        {
          name: "ZERO Edition3 (할인형)",
          benefits: ["모든 가맹점 1.5% 할인", "생활 필수 영역 1% 추가 할인"],
          event: "온라인 신규 발급 및 조건 충족 시 최대 10만원 혜택",
        },
      ],
      contact: "1577-6000",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <CreditCard className="w-10 h-10 text-primary" />
            대한민국 카드 혜택 총정리
          </h1>
          <p className="text-lg text-gray-600">
            주요 카드사별 인기 카드와 특별 이벤트를 확인해보세요.
          </p>
        </header>

        <div className="space-y-12">
          {cardCompanies.map((company) => (
            <Card key={company.name} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gray-100/50">
                <div className="flex justify-between items-center">
                  <CardTitle className={`text-2xl font-bold ${company.logoColor}`}>{company.name}</CardTitle>
                  <Button asChild variant="outline" size="sm">
                    <a href={`tel:${company.contact}`}>
                      <Phone className="mr-2 h-4 w-4" />
                      상담사 연결
                    </a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {company.cards.map((card) => (
                    <div key={card.name} className="border-l-4 border-primary pl-4 py-2 bg-white rounded-r-md">
                      <h4 className="font-semibold text-lg text-gray-800">{card.name}</h4>
                      <ul className="list-disc list-inside text-gray-600 mt-2 text-sm space-y-1">
                        {card.benefits.map((benefit, i) => <li key={i}>{benefit}</li>)}
                      </ul>
                      {card.event && (
                        <Badge variant="destructive" className="mt-3">
                          이벤트: {card.event}
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <footer className="text-center mt-16 text-sm text-gray-500">
          <p>※ 카드 발급 전 상품설명서와 약관을 반드시 확인하시기 바랍니다.</p>
          <p>※ 정보는 2025년 6월 기준이며, 카드사 사정에 따라 변경될 수 있습니다.</p>
        </footer>
      </div>
    </div>
  );
};

export default CreditCardGuide;
