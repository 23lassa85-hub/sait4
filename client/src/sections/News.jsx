import { images } from '../media'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const articleList = [
  { id: 1, title: 'This Article’s Title goes Here, but not too long.', date: 'Monday 05, September 2021 | By Author' },
  { id: 2, title: 'This Article’s Title goes Here, but not too long.', date: 'Monday 05, September 2021 | By Author' },
  { id: 3, title: 'This Article’s Title goes Here, but not too long.', date: 'Monday 05, September 2021 | By Author' },
  { id: 4, title: 'This Article’s Title goes Here, but not too long.', date: 'Monday 05, September 2021 | By Author' },
]

export default function News() {
  return (
    <section className="news" id="news">
      <div className="news-inner">
        <div className="news-head">
          <h4 className="news-eyebrow">Better information, Better health</h4>
          <h2 className="news-title">News</h2>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          navigation={false}
          modules={[Pagination, Navigation]}
          className="news-swiper"
        >
          {[1, 2, 3].map((slideNum) => (
            <SwiperSlide key={slideNum}>
              <div className="news-grid">
                {articleList.map((item) => (
                  <article key={item.id} className="news-card">
                    <img
                      src={images.newsPhoto}
                      alt=""
                      className="news-thumb"
                    />
                    <div className="news-info">
                      <span className="news-meta">{item.date}</span>
                      <p className="news-heading">{item.title}</p>
                      <img
                        src={images.stats}
                        alt=""
                        className="news-stats"
                      />
                    </div>
                  </article>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <img
          src={images.pager}
          alt=""
          className="news-pager"
        />
      </div>
    </section>
  )
}