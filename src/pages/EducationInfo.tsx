
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, Mail, Flag } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const educationOffices = [
    { name: "서울특별시교육청", url: "https://www.sen.go.kr/" },
    { name: "부산광역시교육청", url: "https://www.pen.go.kr/" },
    { name: "대구광역시교육청", url: "https://www.dge.go.kr/" },
    { name: "인천광역시교육청", url: "https://www.ice.go.kr/" },
    { name: "광주광역시교육청", url: "https://www.gen.go.kr/" },
    { name: "대전광역시교육청", url: "https://www.dje.go.kr/" },
    { name: "울산광역시교육청", url: "https://www.use.go.kr/" },
    { name: "세종특별자치시교육청", url: "https://www.sje.go.kr/" },
    { name: "경기도교육청", url: "https://www.goe.go.kr/" },
    { name: "강원특별자치도교육청", url: "https://www.gwe.go.kr/" },
    { name: "충청북도교육청", url: "https://www.cbe.go.kr/" },
    { name: "충청남도교육청", url: "https://www.cne.go.kr/" },
    { name: "전북특별자치도교육청", url: "https://www.jbe.go.kr/" },
    { name: "전라남도교육청", url: "https://www.jne.go.kr/" },
    { name: "경상북도교육청", url: "https://www.gbe.kr/" },
    { name: "경상남도교육청", url: "https://www.gne.go.kr/" },
    { name: "제주특별자치도교육청", url: "https://www.jje.go.kr/" },
];

const EducationInfo = () => {
  const handleActionClick = (actionName: string) => {
    toast.info(`${actionName} 서비스는 현재 준비 중입니다.`, {
      description: "빠른 시일 내에 찾아뵙겠습니다!",
      duration: 3000,
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-blue-600 text-white text-center py-12 px-4">
        <h1 className="text-4xl font-bold mb-2">대한민국 교육 정보</h1>
        <p className="text-lg">전국 교육청 정보와 다양한 교육 서비스를 한곳에서 확인하세요.</p>
      </header>
      
      <main className="max-w-7xl mx-auto p-4 md:p-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">주요 서비스</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Search className="text-blue-500" />스승찾기</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">존경하는 선생님의 소식을 찾아보세요.</p>
                <Button className="w-full" onClick={() => handleActionClick("스승찾기")}>서비스 바로가기</Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Mail className="text-green-500" />민원 신청</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">교육 관련 민원을 간편하게 신청하세요.</p>
                <Button className="w-full" onClick={() => handleActionClick("민원 신청")}>서비스 바로가기</Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Flag className="text-red-500" />부조리 신고</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">안전하고 투명한 교육 환경을 위해 참여해주세요.</p>
                <Button className="w-full" onClick={() => handleActionClick("부조리 신고")}>서비스 바로가기</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-8">전국 시도 교육청</h2>
          <Accordion type="single" collapsible className="w-full bg-white p-4 rounded-lg shadow">
            {educationOffices.map((office, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-lg font-medium hover:no-underline">
                  <div className="flex items-center gap-3">
                    {office.name}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-10">
                  <p className="text-gray-700">
                    공식 웹사이트로 이동하여 더 자세한 정보를 확인하세요.
                  </p>
                  <Button asChild variant="link" className="px-0">
                    <a href={office.url} target="_blank" rel="noopener noreferrer">
                      웹사이트 바로가기
                    </a>
                  </Button>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>

      <footer className="text-center py-6 bg-gray-100 mt-12">
        <p className="text-gray-600">대한민국의 모든 학생과 교직원을 응원합니다.</p>
      </footer>
    </div>
  );
};

export default EducationInfo;

