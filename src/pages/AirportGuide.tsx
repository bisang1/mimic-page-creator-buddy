
import React, { useState } from 'react';
import { MapPin, Building2, Phone, Clock, Car, Train, Users, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SoccerGuide = () => {
  const [activeTab, setActiveTab] = useState('reservation');

  const stadiums = [
    { name: '서울월드컵경기장', capacity: '66,704석', icon: '⚽', href: '#seoul-worldcup', team: 'FC서울' },
    { name: '수원월드컵경기장', capacity: '44,031석', icon: '🏟️', href: '#suwon-worldcup', team: '수원삼성' },
    { name: '인천축구전용경기장', capacity: '20,891석', icon: '💙', href: '#incheon', team: '인천유나이티드' },
    { name: '창원축구센터', capacity: '35,000석', icon: '🔵', href: '#changwon', team: '경남FC' },
    { name: '대전월드컵경기장', capacity: '40,535석', icon: '🟢', href: '#daejeon-worldcup', team: '대전하나시티즌' },
    { name: '광주월드컵경기장', capacity: '40,245석', icon: '🔴', href: '#gwangju-worldcup', team: '광주FC' },
    { name: '대구FC파크', capacity: '12,415석', icon: '🟡', href: '#daegu-fc', team: '대구FC' },
    { name: '울산문수축구경기장', capacity: '44,102석', icon: '⚫', href: '#ulsan-munsu', team: '울산HD' },
    { name: '전주월드컵경기장', capacity: '42,477석', icon: '🟤', href: '#jeonju-worldcup', team: '전북현대' },
    { name: '포항스틸야드', capacity: '25,000석', icon: '🔶', href: '#pohang-steel', team: '포항스틸러스' },
    { name: '제주월드컵경기장', capacity: '35,657석', icon: '🏝️', href: '#jeju-worldcup', team: '제주유나이티드' },
    { name: '서울올림픽주경기장', capacity: '69,950석', icon: '🏛️', href: '#seoul-olympic', team: '국가대표 경기장' }
  ];

  const kLeagueTeams = [
    'FC서울', '수원삼성 블루윙즈', '인천유나이티드', '경남FC',
    '대전하나시티즌', '광주FC', '대구FC', '울산HD',
    '전북현대 모터스', '포항스틸러스', '제주유나이티드', '강원FC'
  ];

  const soccerContacts = [
    { title: 'KFA 대한축구협회', number: '02-2002-0777', icon: Phone },
    { title: 'K리그 사무국', number: '02-2002-9000', icon: Phone },
    { title: '축구장 예약센터', number: '1588-7777', icon: Phone },
    { title: '축구용품 할인정보', number: '1577-1234', icon: Phone }
  ];

  const facilities = [
    { name: '매점', desc: '음료, 간식, 축구용품', icon: Building2 },
    { name: '주차장', desc: '경기장 내부/외부 주차', icon: Car },
    { name: '대중교통', desc: '지하철, 버스 연결', icon: Train },
    { name: '팬샵', desc: '구단 굿즈, 유니폼', icon: Building2 },
    { name: '화장실', desc: '각 구역별 편의시설', icon: Building2 },
    { name: '의무실', desc: '응급처치, 의료진 상주', icon: Building2 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 via-blue-600 to-green-800 relative overflow-hidden">
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
            <div className="text-6xl">⚽</div>
            대한민국 축구장 안내
          </h1>
          <p className="text-xl text-white/80">전국 축구장 정보와 예약을 한눈에 확인하세요</p>
        </header>

        {/* Ad Space */}
        <div className="bg-white/10 border-2 border-dashed border-white/30 rounded-xl p-8 mb-12 text-center backdrop-blur-md">
          <div className="text-white/60 text-lg mb-2">📢 광고 영역</div>
          <div className="text-white/40 text-sm">축구용품 할인 정보를 여기에 삽입하세요</div>
        </div>

        {/* Main Stadiums */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8 relative">
            전국 주요 축구장
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {stadiums.map((stadium, index) => (
              <Card key={index} className="bg-white/15 border-white/20 backdrop-blur-md hover:bg-white/25 transition-all duration-300 hover:transform hover:-translate-y-2 cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stadium.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{stadium.name}</h3>
                  <div className="bg-white/10 text-white/70 px-3 py-1 rounded-full text-sm mb-2">
                    {stadium.capacity}
                  </div>
                  <div className="text-green-300 text-sm font-medium">
                    {stadium.team}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* K-League Teams */}
        <section className="mb-16">
          <Card className="bg-white/10 border-white/20 backdrop-blur-md">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-white text-center mb-8">K리그 구단</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {kLeagueTeams.map((team, index) => (
                  <div key={index} className="bg-white/20 rounded-lg p-4 text-center text-white font-medium hover:bg-white/30 transition-all duration-300 hover:transform hover:-translate-y-1">
                    {team}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Soccer Guide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8 relative">
            축구장 이용 가이드
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
          </h2>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-white/10 border-white/20">
              <TabsTrigger value="reservation" className="data-[state=active]:bg-white/30">예약 방법</TabsTrigger>
              <TabsTrigger value="transport" className="data-[state=active]:bg-white/30">교통편</TabsTrigger>
              <TabsTrigger value="parking" className="data-[state=active]:bg-white/30">주차 정보</TabsTrigger>
              <TabsTrigger value="facilities" className="data-[state=active]:bg-white/30">편의시설</TabsTrigger>
            </TabsList>

            <TabsContent value="reservation" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-white/10 border-white/20 backdrop-blur-md">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="w-6 h-6 text-white" />
                      <h4 className="text-lg font-semibold text-white">온라인 예약</h4>
                    </div>
                    <p className="text-white/90">
                      <strong>방법:</strong> 각 경기장 홈페이지<br/>
                      <strong>시간:</strong> 24시간 예약 가능<br/>
                      <strong>결제:</strong> 카드, 계좌이체
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 border-white/20 backdrop-blur-md">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Phone className="w-6 h-6 text-white" />
                      <h4 className="text-lg font-semibold text-white">전화 예약</h4>
                    </div>
                    <p className="text-white/90">
                      <strong>시간:</strong> 평일 09:00-18:00<br/>
                      <strong>주말:</strong> 09:00-17:00<br/>
                      <strong>예약:</strong> 최대 30일 전
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-green-500/20 border-green-400/30 backdrop-blur-md">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="w-6 h-6 text-white" />
                      <h4 className="text-lg font-semibold text-white">단체 예약</h4>
                    </div>
                    <p className="text-white/90">10명 이상 단체는 할인 혜택 제공</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="transport" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: '지하철', desc: '각 경기장별 전용역\n2-9호선 연결', icon: Train },
                  { title: '버스', desc: '시내버스, 마을버스\n경기일 증편 운행', icon: Car },
                  { title: '셔틀버스', desc: '경기일 임시 운행\n주요 지하철역 연결', icon: Car },
                  { title: '자가용', desc: '경기장 주차장 이용\n사전 예약 권장', icon: Car }
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

            <TabsContent value="parking" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-white/10 border-white/20 backdrop-blur-md">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Car className="w-6 h-6 text-white" />
                      <h4 className="text-lg font-semibold text-white">경기장 주차</h4>
                    </div>
                    <p className="text-white/90">
                      <strong>요금:</strong> 경기일 10,000원<br/>
                      <strong>평상시:</strong> 시간당 2,000원<br/>
                      <strong>예약:</strong> 온라인 사전예약
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 border-white/20 backdrop-blur-md">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin className="w-6 h-6 text-white" />
                      <h4 className="text-lg font-semibold text-white">인근 주차장</h4>
                    </div>
                    <p className="text-white/90">
                      <strong>공영주차장:</strong> 도보 5-10분<br/>
                      <strong>요금:</strong> 8,000~12,000원<br/>
                      <strong>운영:</strong> 24시간
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-blue-500/20 border-blue-400/30 backdrop-blur-md">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="w-6 h-6 text-white" />
                      <h4 className="text-lg font-semibold text-white">주차 팁</h4>
                    </div>
                    <p className="text-white/90">경기 2시간 전 도착 권장!</p>
                  </CardContent>
                </Card>
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

        {/* Soccer Contacts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8 relative">
            축구 관련 연락처
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {soccerContacts.map((contact, index) => (
              <Card key={index} className="bg-white/15 border-white/20 backdrop-blur-md hover:bg-white/25 transition-all duration-300 hover:transform hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <contact.icon className="w-8 h-8 text-white mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">{contact.title}</h4>
                  <div className="text-green-300 font-mono text-lg font-bold">{contact.number}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quick Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8 relative">
            빠른 서비스
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: '축구장 예약', desc: 'K리그 통합 예약 시스템', icon: Calendar, href: 'https://www.kleague.com/' },
              { title: '경기 일정', desc: 'K리그 공식 일정 확인', icon: Clock, href: 'https://www.kleague.com/match' },
              { title: '티켓 예매', desc: '온라인 티켓 예매', icon: Phone, href: 'https://ticket.interpark.com/sports' }
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
          <div className="text-white/60 text-lg mb-2">🎯 축구용품 할인 광고</div>
          <div className="text-white/40 text-sm">축구화, 유니폼, 축구공 할인 정보를 여기에 삽입하세요</div>
        </div>
      </div>
    </div>
  );
};

export default SoccerGuide;
