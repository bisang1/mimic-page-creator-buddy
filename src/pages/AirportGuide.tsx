
import React, { useState } from 'react';
import { Plane, Building2, Phone, MapPin, Clock, Luggage, Car, Coffee, ShoppingBag, Wifi } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AirportGuide = () => {
  const [activeTab, setActiveTab] = useState('baggage');

  const airports = [
    { name: '인천국제공항', code: 'ICN', icon: '✈️', href: '#incheon' },
    { name: '김포국제공항', code: 'GMP', icon: '🛫', href: '#gimpo' },
    { name: '제주국제공항', code: 'CJU', icon: '🏝️', href: '#jeju' },
    { name: '김해국제공항', code: 'PUS', icon: '🌊', href: '#gimhae' },
    { name: '대구국제공항', code: 'TAE', icon: '🏔️', href: '#daegu' },
    { name: '청주국제공항', code: 'CJJ', icon: '🌸', href: '#cheongju' },
    { name: '무안국제공항', code: 'MWX', icon: '🌅', href: '#muan' },
    { name: '울산공항', code: 'USN', icon: '🏭', href: '#ulsan' },
    { name: '여수공항', code: 'RSU', icon: '⛵', href: '#yeosu' },
    { name: '포항경주공항', code: 'KPX', icon: '🏛️', href: '#pohang' },
    { name: '군산공항', code: 'KUV', icon: '🦅', href: '#gunsan' },
    { name: '원주공항', code: 'WJU', icon: '🌲', href: '#wonju' }
  ];

  const airlines = [
    '대한항공', '아시아나항공', '제주항공', '진에어', 
    '티웨이항공', '에어부산', '이스타항공', '에어서울'
  ];

  const emergencyContacts = [
    { title: '인천공항 안내', number: '1577-2600', icon: Phone },
    { title: '공항경찰', number: '032-741-2123', icon: Phone },
    { title: '의무실', number: '032-741-2080', icon: Phone },
    { title: '분실물센터', number: '032-741-2357', icon: Phone }
  ];

  const facilities = [
    { name: '면세점', desc: '신라면세점, 롯데면세점', icon: ShoppingBag },
    { name: '식당가', desc: '한식, 양식, 패스트푸드', icon: Coffee },
    { name: '카페', desc: '스타벅스, 투썸플레이스', icon: Coffee },
    { name: '라운지', desc: 'KAL라운지, 아시아나라운지', icon: Building2 },
    { name: '은행/ATM', desc: '환전소, 현금인출기', icon: Building2 },
    { name: '통신', desc: '무료WiFi, 충전소', icon: Wifi }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-20 h-20 bg-white/10 rounded-full top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute w-32 h-32 bg-white/10 rounded-full top-3/5 right-1/4 animate-pulse delay-1000"></div>
        <div className="absolute w-16 h-16 bg-white/10 rounded-full bottom-1/4 left-1/5 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Plane className="w-12 h-12" />
            대한민국 공항 안내
          </h1>
          <p className="text-xl text-white/80">전국 공항 정보를 한눈에 확인하세요</p>
        </header>

        {/* Ad Space */}
        <div className="bg-white/10 border-2 border-dashed border-white/30 rounded-xl p-8 mb-12 text-center backdrop-blur-md">
          <div className="text-white/60 text-lg mb-2">📢 광고 영역</div>
          <div className="text-white/40 text-sm">여기에 광고를 삽입하세요</div>
        </div>

        {/* Main Airports */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8 relative">
            주요 공항
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {airports.map((airport, index) => (
              <Card key={index} className="bg-white/15 border-white/20 backdrop-blur-md hover:bg-white/25 transition-all duration-300 hover:transform hover:-translate-y-2 cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {airport.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{airport.name}</h3>
                  <div className="bg-white/10 text-white/70 px-3 py-1 rounded-full text-sm inline-block">
                    {airport.code}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Airlines */}
        <section className="mb-16">
          <Card className="bg-white/10 border-white/20 backdrop-blur-md">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-white text-center mb-8">국내 주요 항공사</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {airlines.map((airline, index) => (
                  <div key={index} className="bg-white/20 rounded-lg p-4 text-center text-white font-medium hover:bg-white/30 transition-all duration-300 hover:transform hover:-translate-y-1">
                    {airline}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Travel Guide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8 relative">
            여행 필수 가이드
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full"></div>
          </h2>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-white/10 border-white/20">
              <TabsTrigger value="baggage" className="data-[state=active]:bg-white/30">수하물 규정</TabsTrigger>
              <TabsTrigger value="checkin" className="data-[state=active]:bg-white/30">체크인 시간</TabsTrigger>
              <TabsTrigger value="transport" className="data-[state=active]:bg-white/30">교통편</TabsTrigger>
              <TabsTrigger value="facilities" className="data-[state=active]:bg-white/30">편의시설</TabsTrigger>
            </TabsList>

            <TabsContent value="baggage" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-white/10 border-white/20 backdrop-blur-md">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Plane className="w-6 h-6 text-white" />
                      <h4 className="text-lg font-semibold text-white">국내선</h4>
                    </div>
                    <p className="text-white/90">
                      <strong>기내:</strong> 10kg | <strong>위탁:</strong> 20kg<br/>
                      <strong>크기:</strong> 55×40×20cm
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 border-white/20 backdrop-blur-md">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin className="w-6 h-6 text-white" />
                      <h4 className="text-lg font-semibold text-white">국제선</h4>
                    </div>
                    <p className="text-white/90">
                      <strong>기내:</strong> 10kg | <strong>위탁:</strong> 23kg<br/>
                      <strong>크기:</strong> 55×40×20cm
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-red-500/20 border-red-400/30 backdrop-blur-md">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Luggage className="w-6 h-6 text-white" />
                      <h4 className="text-lg font-semibold text-white">금지 물품</h4>
                    </div>
                    <p className="text-white/90">액체류 100ml 초과, 날카로운 물건, 리튬배터리</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="checkin" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-white/10 border-white/20 backdrop-blur-md">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="w-6 h-6 text-white" />
                      <h4 className="text-lg font-semibold text-white">국내선</h4>
                    </div>
                    <p className="text-white/90">
                      <strong>체크인 마감:</strong> 출발 40분 전<br/>
                      <strong>탑승구 마감:</strong> 출발 15분 전
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 border-white/20 backdrop-blur-md">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="w-6 h-6 text-white" />
                      <h4 className="text-lg font-semibold text-white">국제선</h4>
                    </div>
                    <p className="text-white/90">
                      <strong>체크인 마감:</strong> 출발 60분 전<br/>
                      <strong>탑승구 마감:</strong> 출발 30분 전
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-green-500/20 border-green-400/30 backdrop-blur-md">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Phone className="w-6 h-6 text-white" />
                      <h4 className="text-lg font-semibold text-white">꿀팁</h4>
                    </div>
                    <p className="text-white/90">모바일 체크인으로 시간 단축하세요!</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="transport" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: '공항버스', desc: '시내 주요 지역 운행\n요금: 15,000~17,000원', icon: Car },
                  { title: '지하철/전철', desc: '인천공항선, 김포공항선\n요금: 4,000~5,000원', icon: Car },
                  { title: '자가용', desc: '주차요금: 일반 4,000원/일\n지정 6,000원/일', icon: Car },
                  { title: '택시', desc: '시내까지 60,000~80,000원\n(거리별 상이)', icon: Car }
                ].map((transport, index) => (
                  <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-md">
                    <CardContent className="p-6 text-center">
                      <transport.icon className="w-8 h-8 text-white mx-auto mb-4" />
                      <h4 className="text-lg font-semibold text-white mb-2">{transport.title}</h4>
                      <p className="text-white/90 text-sm whitespace-pre-line">{transport.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="facilities" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {facilities.map((facility, index) => (
                  <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-md hover:bg-white/20 transition-all duration-300">
                    <CardContent className="p-4 text-center">
                      <facility.icon className="w-8 h-8 text-white mx-auto mb-3" />
                      <h4 className="text-white font-medium mb-2">{facility.name}</h4>
                      <p className="text-white/70 text-xs">{facility.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Emergency Contacts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8 relative">
            긴급 연락처
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyContacts.map((contact, index) => (
              <Card key={index} className="bg-white/15 border-white/20 backdrop-blur-md hover:bg-white/25 transition-all duration-300 hover:transform hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <contact.icon className="w-8 h-8 text-white mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">{contact.title}</h4>
                  <div className="text-cyan-300 font-mono text-lg font-bold">{contact.number}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quick Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8 relative">
            빠른 서비스
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: '실시간 운항정보', desc: '한국공항공사 공식 사이트', icon: Building2, href: 'https://www.airport.co.kr/main/index.do' },
              { title: '항공편 조회', desc: '에어포탈 통합 검색', icon: Plane, href: 'https://www.airportal.go.kr/flight/flightStatsIntro.jsp' },
              { title: '티켓 예매', desc: '온라인 항공권 예약', icon: Phone, href: 'https://www.koreanair.com/' }
            ].map((service, index) => (
              <Card key={index} className="bg-white/20 border-white/20 backdrop-blur-md hover:bg-white/30 transition-all duration-300 hover:transform hover:-translate-y-2 cursor-pointer group">
                <CardContent className="p-8 text-center">
                  <service.icon className="w-12 h-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-xl font-semibold text-white mb-2">{service.title}</h4>
                  <p className="text-white/80">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Footer Ad */}
        <div className="bg-white/10 border-2 border-dashed border-white/30 rounded-xl p-8 text-center backdrop-blur-md">
          <div className="text-white/60 text-lg mb-2">🎯 푸터 광고 영역</div>
          <div className="text-white/40 text-sm">여기에 반응형 광고를 삽입하세요</div>
        </div>
      </div>
    </div>
  );
};

export default AirportGuide;
