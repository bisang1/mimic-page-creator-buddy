
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, Users, Trophy, Newspaper, Award, Rocket } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Blomi = () => {
  const { toast } = useToast();

  const handleStartClick = () => {
    toast({
      title: "환영합니다!",
      description: "블로미 서비스에 곧 멋진 기능으로 찾아뵙겠습니다.",
      duration: 3000,
    });
  };

  const handleFeatureClick = (featureTitle: string) => {
    toast({
      title: `${featureTitle}`,
      description: "해당 기능은 곧 준비될 예정입니다. 기대해주세요!",
      duration: 3000,
    });
  };

  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-blue-500" />,
      title: "나만의 공간, 블로그",
      description: "당신의 생각과 경험을 기록하고 공유하는 개인적인 공간입니다.",
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "함께 쓰는 즐거움, 커뮤니티",
      description: "다른 작가들과 소통하며 함께 성장하는 글쓰기 커뮤니티입니다.",
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      title: "체계적인 글쓰기, 챌린지",
      description: "다양한 주제의 챌린지에 참여하여 글쓰기 습관을 만들어보세요.",
    },
    {
      icon: <Newspaper className="w-8 h-8 text-purple-500" />,
      title: "세상의 모든 지식, 아티클",
      description: "전문가들의 깊이 있는 아티클을 통해 새로운 영감을 얻으세요.",
    },
    {
      icon: <Award className="w-8 h-8 text-red-500" />,
      title: "새로운 기회, 출판 제안",
      description: "당신의 글이 책이 될 수 있는 기회를 잡으세요.",
    },
  ];

  const faqItems = [
    {
      question: "블로미는 어떤 서비스인가요?",
      answer: "블로미는 글쓰기, 독서, 커뮤니티, 출판까지 한 번에 경험할 수 있는 온라인 글쓰기 플랫폼입니다. 누구나 자신만의 공간에서 자유롭게 글을 쓰고, 다른 사람들과 생각을 나누며 성장할 수 있습니다.",
    },
    {
      question: "누구나 작가가 될 수 있나요?",
      answer: "네, 그럼요! 블로미에서는 글쓰기를 좋아하는 사람이라면 누구나 작가가 될 수 있습니다. 꾸준히 글을 쓰고 커뮤니티 활동에 참여하며 당신의 가능성을 펼쳐보세요.",
    },
    {
      question: "챌린지는 어떻게 참여하나요?",
      answer: "웹사이트의 '챌린지' 섹션에서 진행 중인 다양한 글쓰기 챌린지를 확인하고 참여할 수 있습니다. 마음에 드는 챌린지를 선택하고 '참여하기' 버튼을 누르면 됩니다.",
    },
    {
      question: "출판 제안은 어떻게 받나요?",
      answer: "블로미 에디터들이 정기적으로 작가님들의 글을 검토하며 출판 가능성이 있는 작품에 대해 제안을 드리고 있습니다. 좋은 글을 꾸준히 발행하는 것이 가장 중요합니다.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gradient-to-b from-purple-50 to-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          글쓰기, 독서, 커뮤니티, 출판까지 한 번에
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
          블로미는 나만의 공간에서 마음껏 글을 쓰고, 함께 성장하는 즐거움을 나눌 수 있는 온라인 글쓰기 플랫폼입니다.
        </p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" onClick={handleStartClick}>
          블로미 시작하기 <Rocket className="ml-2" />
        </Button>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Blomi, 이런 점이 좋아요</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="flex flex-col text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 flex-grow">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-500">{feature.description}</p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button variant="outline" className="w-full" onClick={() => handleFeatureClick(feature.title)}>자세히 보기</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">자주 묻는 질문 (FAQ)</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-lg font-medium">{item.question}</AccordionTrigger>
                <AccordionContent className="text-base text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 bg-gray-800 text-white">
        <p>© 2025 Blomi. All rights reserved.</p>
        <p className="text-sm text-gray-400 mt-2">당신의 이야기를 세상에 펼쳐보세요.</p>
      </footer>
    </div>
  );
};

export default Blomi;
