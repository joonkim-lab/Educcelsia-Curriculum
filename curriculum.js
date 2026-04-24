// ===================================================
// curriculum.js — 독서카드 형식 커리큘럼 데이터
// Q1~Q4: 독서 카드 항목 (핵심 질문 / 핵심 키워드 / 적용점 / 한 줄 요약)
// Q5: AI 채점 가능한 나만의 연결 (기존 유지)
// ===================================================

const READING_CARD_QUESTIONS = [
  {
    id: 'q1',
    label: '핵심 질문',
    icon: '❓',
    cardField: '핵심 질문',
    description: '이 아티클이 던지는 가장 중요한 질문은 무엇인가요?',
    placeholder: '예: 브랜드는 위기를 어떻게 기회로 바꾸는가?',
    points: 4,
    rubric: '아티클의 핵심 주제를 꿰뚫는 질문인지 평가 (단순 사실 나열은 낮은 점수)'
  },
  {
    id: 'q2',
    label: '핵심 키워드',
    icon: '🔑',
    cardField: '핵심 키워드',
    description: '아티클에서 반드시 기억해야 할 개념이나 키워드를 3~5개 뽑아 각각 짧게 설명하세요.',
    placeholder: '예: 브랜드 복기 — 실패 원인을 분석해 다음에 반영하는 과정',
    points: 4,
    rubric: '키워드의 선별 적절성 + 설명의 정확성 평가'
  },
  {
    id: 'q3',
    label: '적용점',
    icon: '💡',
    cardField: '적용점',
    description: '이 아티클의 내용을 내 삶이나 진로에서 어떻게 쓸 수 있을지 구체적으로 쓰세요.',
    placeholder: '예: 내가 팀 프로젝트를 할 때 실패한 이유를 복기하는 습관을 만들겠다.',
    points: 4,
    rubric: '구체성과 현실적용 가능성 평가'
  },
  {
    id: 'q4',
    label: '한 줄 요약',
    icon: '✍️',
    cardField: '한 줄 요약',
    description: '이 아티클의 핵심 메시지를 딱 한 문장으로 압축하세요.',
    placeholder: '예: 브랜드의 위기는 본질로 돌아가는 기회다.',
    points: 4,
    rubric: '핵심 메시지 압축력 평가 (길면 낮은 점수)'
  }
];

const Q5_OPTIONS = [
  {
    id: 'career',
    label: '🎓 전공/진로 연결',
    text: '이 아티클의 핵심 개념을 나의 희망 전공이나 진로와 연결하세요. "이 아티클의 ___ 전략은, 내가 배우고자 하는 ___ 분야에서 ___ 방식으로 적용될 수 있다" 형식으로 구체적으로 작성하세요.'
  },
  {
    id: 'experience',
    label: '🌱 나의 경험 연결',
    text: '이 아티클에서 발견한 인사이트를 나의 실제 경험과 연결하세요. 과거 경험이나 현재 상황에서 이 내용이 어떻게 의미 있는지 구체적으로 서술하세요.'
  },
  {
    id: 'society',
    label: '🌍 사회 문제 연결',
    text: '이 아티클의 내용을 현재 우리 사회의 이슈나 문제와 연결하세요. 어떤 사회적 맥락에서 이 아티클의 관점이 중요하며, 어떤 변화를 이끌 수 있을지 논하세요.'
  }
];

// 독서카드 문항 생성 헬퍼
function makeWeek(week, title, url, q5hint) {
  return {
    week,
    title,
    url,
    questions: [
      ...READING_CARD_QUESTIONS,
      {
        id: 'q5',
        label: '나만의 연결',
        icon: '🔗',
        cardField: null, // 카드에 포함되지 않음 — AI 채점 전용
        isQ5: true,
        options: Q5_OPTIONS,
        hint: q5hint || '',
        points: 4,
        rubric: '선택한 연결 방식의 깊이와 구체성 평가'
      }
    ]
  };
}

const CURRICULUM = {
  branding1: {
    title: '브랜딩 1학기',
    subtitle: '브랜드는 어떻게 태어나는가',
    color: '#c0392b',
    weeks: [
      makeWeek(1,  '레고 : 89년 장난감이 다시 세계 1위 브랜드가 된 이유', 'longblack.co/note/138',
        '레고의 본질 회귀 전략 또는 스타워즈 협업 결정을 전공/경험/사회와 연결해보세요.'),
      makeWeek(2,  '성심당 : 로컬 빵집 1위의 비결, 재무제표로 뜯어보다', 'longblack.co/note/277',
        '성심당의 지역 밀착 전략이 당신의 전공/경험/사회에 주는 시사점을 연결해보세요.'),
      makeWeek(3,  '파타고니아 : 타고난 사업가 이본 쉬나드, 룰 브레이커가 되다', 'longblack.co/note/956',
        '파타고니아의 가치 중심 경영을 전공/경험/사회 문제와 연결해보세요.'),
      makeWeek(4,  '나이키 1 : 나이키가 팬을 만드는 궁극의 법칙, 스파이크', 'longblack.co/note/999',
        '나이키의 팬덤 구축 방식을 전공/경험/사회와 연결해보세요.'),
      makeWeek(5,  '마르디 메크르디 : 실패를 승리로 바꾸는 단 하나의 방법은 복기다', 'longblack.co/note/278',
        '복기의 힘을 전공/경험/사회와 연결해보세요.'),
      makeWeek(6,  '젠틀몬스터 : 선글라스에서 출발한 유니콘, 재무제표를 읽다', 'longblack.co/note/49',
        '젠틀몬스터의 공간 브랜딩 전략을 전공/경험/사회와 연결해보세요.'),
      makeWeek(7,  '에르메스 : 럭셔리 1위의 비밀, 절대로 고객 말을 듣지 않는다', 'longblack.co/note/176',
        '에르메스의 역발상 전략을 전공/경험/사회와 연결해보세요.'),
      makeWeek(8,  '무인양품 : 무지는 왜 브랜드가 없다고 말하는가', 'longblack.co/note/228',
        '무인양품의 "브랜드 없음"이라는 역설을 전공/경험/사회와 연결해보세요.'),
      makeWeek(9,  '다이소 : 일본 브랜드가 한국 생활용품 1위가 된 이유', 'longblack.co/note/313',
        '다이소의 가성비 전략을 전공/경험/사회와 연결해보세요.'),
      makeWeek(10, '배달의민족 : 배민다움이란 무엇인가', 'longblack.co/note/97',
        '배민의 브랜드 정체성 구축을 전공/경험/사회와 연결해보세요.'),
      makeWeek(11, '오뚜기 : 착한 기업 이미지는 어떻게 만들어지나', 'longblack.co/note/231',
        '오뚜기의 스토리텔링 브랜딩을 전공/경험/사회와 연결해보세요.'),
      makeWeek(12, '포르쉐 : 스포츠카 브랜드가 SUV를 만든 이유', 'longblack.co/note/384',
        '포르쉐의 정체성과 확장 전략의 긴장감을 전공/경험/사회와 연결해보세요.'),
      makeWeek(13, '뉴발란스 : 조용한 브랜드가 MZ 픽이 된 이유', 'longblack.co/note/441',
        '뉴발란스의 비(非)마케팅 전략을 전공/경험/사회와 연결해보세요.'),
      makeWeek(14, '나이키 2 : 나이키가 위기를 자초한 이유', 'longblack.co/note/871',
        '나이키 위기의 원인 분석을 전공/경험/사회와 연결해보세요.'),
      makeWeek(15, '버버리 : 럭셔리 추락과 재건의 교과서', 'longblack.co/note/501',
        '버버리의 브랜드 재건 과정을 전공/경험/사회와 연결해보세요.'),
      makeWeek(16, '올리브영 : 한국 드럭스토어 1위의 비결', 'longblack.co/note/561',
        '올리브영의 유통 혁신을 전공/경험/사회와 연결해보세요.'),
      makeWeek(17, '카카오 : 카카오는 왜 흔들렸는가', 'longblack.co/note/644',
        '카카오 위기의 본질을 전공/경험/사회와 연결해보세요.'),
      makeWeek(18, '애플 : 애플 스토어는 왜 다른가', 'longblack.co/note/708',
        '애플의 공간 브랜딩을 전공/경험/사회와 연결해보세요.'),
      makeWeek(19, '스타벅스 : 스타벅스는 어떻게 공간 브랜드가 되었나', 'longblack.co/note/772',
        '스타벅스의 공간 경험 설계를 전공/경험/사회와 연결해보세요.'),
      makeWeek(20, '토스 : 금융을 다시 디자인하다', 'longblack.co/note/835',
        '토스의 사용자 경험 혁신을 전공/경험/사회와 연결해보세요.'),
    ]
  },
  branding2: {
    title: '브랜딩 2학기',
    subtitle: '브랜드는 어떻게 살아남는가',
    color: '#922b21',
    weeks: [
      makeWeek(1,  '무신사 : 패션 플랫폼 1위의 성장 공식', 'longblack.co/note/118'),
      makeWeek(2,  '크록스 : 못생긴 신발이 글로벌 히트가 된 이유', 'longblack.co/note/205'),
      makeWeek(3,  '하이트진로 : 두꺼비가 살려낸 맥주 회사', 'longblack.co/note/267'),
      makeWeek(4,  '이케아 : 조립식 가구가 라이프스타일 브랜드가 된 이유', 'longblack.co/note/331'),
      makeWeek(5,  '네이버 : 검색에서 슈퍼앱으로', 'longblack.co/note/397'),
      makeWeek(6,  '쿠팡 : 적자를 감수한 성장 전략', 'longblack.co/note/462'),
      makeWeek(7,  '현대카드 : 카드사가 콘텐츠 기업이 된 이유', 'longblack.co/note/528'),
      makeWeek(8,  '오아시스 : 새벽 배송의 틈새를 노리다', 'longblack.co/note/593'),
      makeWeek(9,  '마켓컬리 : 새벽 배송의 선구자가 흔들리는 이유', 'longblack.co/note/657'),
      makeWeek(10, '지그재그 : 패션 앱이 카카오에 팔린 이유', 'longblack.co/note/721'),
      makeWeek(11, '당근마켓 : 동네 앱이 플랫폼이 된 이유', 'longblack.co/note/786'),
      makeWeek(12, '요기요 : 배달앱 2위의 생존 전략', 'longblack.co/note/849'),
      makeWeek(13, '야놀자 : 여행 플랫폼의 유니콘 성장기', 'longblack.co/note/913'),
      makeWeek(14, '클래스101 : 취미에서 교육 플랫폼으로', 'longblack.co/note/178'),
      makeWeek(15, '리디 : 콘텐츠 구독의 새 모델', 'longblack.co/note/245'),
      makeWeek(16, '위워크 : 공유 오피스의 흥망', 'longblack.co/note/312'),
      makeWeek(17, '에이블리 : Z세대 패션 앱의 부상', 'longblack.co/note/378'),
      makeWeek(18, '눈바디 : 다이어트 앱이 커뮤니티가 된 이유', 'longblack.co/note/445'),
      makeWeek(19, '오늘의집 : 인테리어 앱이 커머스가 된 이유', 'longblack.co/note/512'),
      makeWeek(20, '29CM : 취향 큐레이션 쇼핑의 미래', 'longblack.co/note/578'),
    ]
  },
  trend1: {
    title: '트렌드 1학기',
    subtitle: '세상은 어떻게 변하고 있는가',
    color: '#1a5276',
    weeks: [
      makeWeek(1,  '요즘 MZ는 왜 작은 사치에 열광하는가', 'longblack.co/note/144'),
      makeWeek(2,  '챗GPT 이후 달라진 것들', 'longblack.co/note/211'),
      makeWeek(3,  '숏폼이 뇌를 바꾸고 있다', 'longblack.co/note/280'),
      makeWeek(4,  '기후 위기가 소비를 바꾼다', 'longblack.co/note/348'),
      makeWeek(5,  '부캐의 시대 — 나는 몇 개의 나를 살고 있나', 'longblack.co/note/415'),
      makeWeek(6,  '헬스케어의 미래, 우리 몸은 데이터다', 'longblack.co/note/481'),
      makeWeek(7,  '요즘 20대는 왜 아날로그에 빠지는가', 'longblack.co/note/547'),
      makeWeek(8,  '크리에이터 이코노미의 명과 암', 'longblack.co/note/613'),
      makeWeek(9,  '고독 경제 — 혼자가 시장이 되다', 'longblack.co/note/679'),
      makeWeek(10, '여행의 미래 — 여행자는 어디로 가는가', 'longblack.co/note/745'),
      makeWeek(11, '채식의 부상, 우리는 왜 덜 먹기로 했나', 'longblack.co/note/811'),
      makeWeek(12, '팬데믹이 바꾼 도시', 'longblack.co/note/877'),
      makeWeek(13, '새로운 럭셔리 — 경험을 사다', 'longblack.co/note/143'),
      makeWeek(14, '젠더 뉴트럴 패션의 등장', 'longblack.co/note/209'),
      makeWeek(15, '메타버스는 어디로 갔나', 'longblack.co/note/276'),
      makeWeek(16, 'ESG는 진짜인가 그린워싱인가', 'longblack.co/note/343'),
      makeWeek(17, '구독 경제의 성장과 피로', 'longblack.co/note/410'),
      makeWeek(18, '세컨핸드 시장이 커지는 이유', 'longblack.co/note/476'),
      makeWeek(19, '수면 산업의 부상', 'longblack.co/note/542'),
      makeWeek(20, '로컬 크리에이터의 시대', 'longblack.co/note/608'),
    ]
  },
  trend2: {
    title: '트렌드 2학기',
    subtitle: '변화 속에서 나는 어디에 있는가',
    color: '#154360',
    weeks: [
      makeWeek(1,  'AI 아트는 예술인가 도구인가', 'longblack.co/note/674'),
      makeWeek(2,  'K-콘텐츠의 다음은 무엇인가', 'longblack.co/note/740'),
      makeWeek(3,  '노이즈 캔슬링 사회 — 우리는 왜 단절을 원하나', 'longblack.co/note/806'),
      makeWeek(4,  '슈링크플레이션 — 같은 가격, 줄어드는 양', 'longblack.co/note/872'),
      makeWeek(5,  '다크 투어리즘 — 비극의 현장을 찾아가다', 'longblack.co/note/138'),
      makeWeek(6,  '펫 이코노미 — 반려동물이 산업이 되다', 'longblack.co/note/204'),
      makeWeek(7,  '운동의 재발명 — 피트니스를 다시 설계하다', 'longblack.co/note/271'),
      makeWeek(8,  '빌리지 이펙트 — 공동체가 답이 되는 시대', 'longblack.co/note/338'),
      makeWeek(9,  '디지털 디톡스 — 끊기 위해 연결하다', 'longblack.co/note/405'),
      makeWeek(10, '취향의 경제학 — 좋아하는 것이 직업이 되다', 'longblack.co/note/472'),
      makeWeek(11, '밀레니얼 번아웃의 해부', 'longblack.co/note/539'),
      makeWeek(12, '로봇이 일하는 세계', 'longblack.co/note/606'),
      makeWeek(13, '음식의 미래 — 우리는 무엇을 먹게 될까', 'longblack.co/note/673'),
      makeWeek(14, '슬로우 패션 운동의 현실', 'longblack.co/note/740'),
      makeWeek(15, '교육의 미래 — 학교는 어디로 가는가', 'longblack.co/note/807'),
      makeWeek(16, '데이터 프라이버시의 역설', 'longblack.co/note/874'),
      makeWeek(17, '혼밥 혼술을 넘어 — 새로운 식문화', 'longblack.co/note/141'),
      makeWeek(18, '노인 경제 — 고령화가 만드는 새 시장', 'longblack.co/note/207'),
      makeWeek(19, '소도시 청년들 — 서울 밖에서 사는 법', 'longblack.co/note/274'),
      makeWeek(20, '다음 세대에게 — 우리가 물려줄 세상', 'longblack.co/note/341'),
    ]
  }
};

// 독서 카드 항목 추출 (Q1~Q4)
function getCardFields(weekData, answers) {
  return weekData.questions
    .filter(q => q.cardField)
    .map(q => ({
      field: q.cardField,
      icon: q.icon,
      content: answers[q.id] || ''
    }));
}
