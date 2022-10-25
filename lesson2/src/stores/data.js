const imgs = [
    {
      name: 'Bài này không để di diễn',
      img:'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/b/2/9/4/b2943abd92e70b71f681972103343a65.jpg',
      singer: 'Anh Tú Atus',
      time: '2 ngày trước'
    },
    {
      name: 'HUNGOVER (feat.Vũ Cát Tường)',
      img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/7/6/1/d/761d96c0041f8f0322ef5c5e9c04a544.jpg',
      singer: 'MINH, Vũ Cát Tường',
      time: '5 ngày trước'
    },
    {
      name: 'Anh ơi ở lại',
      img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/9/4/b/3/94b3b13db60e0392b193140154c8dc87.jpg',
      singer: 'Thảo trang',
      time: '5 ngày trước'
    },
    {
      name: '906090',
      img:'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/1/e/e/1/1ee19270545210d8de618e94ee6f1f14.jpg',
      singer: 'Tóc Tiên, Mew Amazing',
      time: '2 giờ trước'
    },
    {
      name: 'Hoa Tình Chẳng Nở',
      img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/c/d/2/6/cd261f6fd88f4423dd9875abbf68dc6b.jpg',
      singer: 'Dee Trần',
      time: '5 ngày trước'
    },
    {
      name: 'Lời Nói Dối Sau Cùng',
      img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/0/8/9/7/0897d0b058f77ad7b5b4d573646afe91.jpg',
      singer: 'Vicky Nhung',
      time: '6 ngày trước'
    },
    {
      name: 'Cô Đơn Trên Sofa',
      img:'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/1/7/f/1/17f17c49523af7fd7827ce1e2981b412.jpg',
      singer: 'Hồ Ngọc Hà',
      time: '1 giờ trước'
    },
    {
      name: 'Người Có Còn Thương',
      img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/5/5/8/c/558cf522789d57cdf87b5933235e2880.jpg',
      singer: 'Minh Vương M4U, Thương Võ, ACV',
      time: '5 ngày trước'
    },
    {
      name: 'Bye Bye',
      img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/0/0/d/c/00dc927cc88c0093c520a8829d1e0d48.jpg',
      singer: 'Mashmello, Juice Wrld',
      time: '5 ngày trước'
    },
    {
        name: 'Hối Duyên',
        singer: 'Masew, Khoi Vu, Great',
        time: '4 ngày trước',
        img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/8/2/9/a/829a8e27aff8bd84180f4b81dc576f0c.jpg'
    },
    {
        name: 'ill',
        singer: 'Alexander 23, Kenny Beats',
        time: '5 ngày trước',
        img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/6/9/0/2/6902ff5e6059aed9943f11d4cd7b5b59.jpg'
    },
    {
        name: 'Ghép Môi',
        singer: 'OSAD',
        time: '6 ngày trước',
        img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/9/7/3/6/973605e63de706dee36cde24652670f5.jpg'
    }
    
  ]

const chill_img = [
    {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/c/b/2/0cb28e7b639001227ac05519290de3a6.jpg',
        title: 'Nhạc Cho Thứ Tư',
        content: 'Thứ Tư từ từ tận hưởng Indie Việt'

    },
    {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/c/7/8/8c78099362eab1bea985bc8a6aa9ffae.jpg',
        title: 'Đóa Hoa Hồng Nhạc Việt',
        content: 'Nữ ca sĩ tỏa sắc hương trong khu vườn V-Pop'
    },
    {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/7/6/9/97694c67b170f0316d20f97554932c03.jpg',
        title: 'Chillout',
        content: 'Bạn đã sẵn sàng để bỏ hết mọi ưu phiền mệt mỏi hay...'
    },
    {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/7/d/c/d7dc5aff1231c4ce55c8401644721550.jpg',
        title: 'Today\'s K-Pop Hits',
        content: '(G)I-DLE và 30 bản Hits K-Pop nổi bật hiện nay'
    },
    {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/2/8/2/a282a0d1ca6dff2bdba8f0944af98a64.jpg',
        title: 'Hà Nhi\'s Ex Story',
        content: 'Lâu lâu nhắc lại về \'vũ trụ người yêu cũ\' cùng Hà Nhi. Chỉ có tại...'
    }
]
const imgSlider = [
  'https://photo-zmp3.zmdcdn.me/banner/f/a/3/1/fa31693a9d608ef66f8a4d942b66588e.jpg',
  'https://photo-zmp3.zmdcdn.me/banner/2/0/9/1/20914343e6e2452e3d3b216c427f84d5.jpg',
  'https://photo-zmp3.zmdcdn.me/banner/0/b/0/d/0b0d1a6a1ffa117504025d6979f1b0a7.jpg',
  'https://photo-zmp3.zmdcdn.me/banner/5/f/8/e/5f8e261888a1f6eb509a17e8c3da45f7.jpg',
  'https://photo-zmp3.zmdcdn.me/banner/c/9/4/8/c9486cfa0ea68fd026409f8159dcce99.jpg',
  'https://photo-zmp3.zmdcdn.me/banner/f/e/8/4/fe844ebbd9a713e6283ee504d94e00f7.jpg'
]

const postcardImg = [
  {
    img: 'https://photo-resize-zmp3.zmdcdn.me/w128_r1x1_webp/images/4/b/7/2/4b72201158a83951be8be9f39bc29abf.jpg',
    name: ' #26 Bí quyết thành công của người Do Thái | Đắp Chăn Nằm Nghe...',
    channel: 'Đắp Chăn Nằm Nghe Tun Kể',
    timeUp: '16/10/2022 • 16 phút' 
  },
  {
    img: 'https://photo-resize-zmp3.zmdcdn.me/w128_r1x1_webp/images/b/0/e/e/b0ee74f23dfbb2de53bfbb4e11a0e9c2.jpg',
    name: '#25 Cùng Đích Lép đi tìm 5 dấu hiệu lý tưởng mà một người bạn đời',
    channel: 'Đắp Chăn Nằm Nghe Tun Kể',
    timeUp: '09/10/2022 • còn 25 phút' 
  },
  {
    img: 'https://photo-resize-zmp3.zmdcdn.me/w128_r1x1_webp/images/2/c/3/9/2c393e3918460b79fac9a30f182bbd7c.jpg',
    name: '86. Hướng Nội và Hướng Ngoại',
    channel: 'HIEU.TV',
    timeUp: '21/10/2022 • 22 phút'
  },
  {
    img: 'https://photo-resize-zmp3.zmdcdn.me/w128_r1x1_webp/images/4/0/2/0/402050c985025ba6bb5c2a0949b244c1.jpg',
    name: '[Phần 2] Cuộc Đời Nói Chuyện Bằng Kết Quả - Tri kỷ cảm xúc #252',
    channel: 'Tri kỷ cảm xúc',
    timeUp: '17/10/2022 • 25 phút'
  },
  {
    img: 'https://photo-resize-zmp3.zmdcdn.me/w128_r1x1_webp/images/3/7/0/5/37056ccd5ad6521db9f3941a5084d27f.jpg',
    name: '85. Hành Trình Hiểu Về Bản Thân',
    channel: 'HIEU.TV',
    timeUp: '11/10/2022 • 19 phút'
  },
  {
    img: 'https://photo-resize-zmp3.zmdcdn.me/w128_r1x1_webp/avatars/1/d/0/d/1d0d3f88a0ab911690cc0a3e9c23fff0.jpg',
    name: 'Cuối đoạn đường | Tập cuối - Nắng Thuỷ Tinh Podcast Series',
    channel: 'Nắng Thủy Tinh',
    timeUp: '21/08/2022 • 24 phút'
  }
]

export {imgs, chill_img, imgSlider, postcardImg}