import { FC } from 'react';

export const Faq: FC = () => {
  return (
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>Часто задаваемые вопросы - FAQ</h2>
        <p>
          <h5>hgjk </h5>
        </p>
        <div className="faq-list">
          <ul>
            <li data-aos="fade-up">
              <i className="bx bx-help-circle icon-help"></i>{' '}
              <a data-toggle="collapse" className="collapse">
                Вопрос 1 ? <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div id="faq-list-1" className="collapse show" data-parent=".faq-list">
                <p>ответ</p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="100">
              <i className="bx bx-help-circle icon-help"></i>{' '}
              <a data-toggle="collapse" className="collapsed">
                Вопрос 2? <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div id="faq-list-2" className="collapse" data-parent=".faq-list">
                <p>ответ</p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="200">
              <i className="bx bx-help-circle icon-help"></i>{' '}
              <a data-toggle="collapse" className="collapsed">
                Вопрос 3? <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div id="faq-list-3" className="collapse" data-parent=".faq-list">
                <p>ответ</p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="300">
              <i className="bx bx-help-circle icon-help"></i>{' '}
              <a data-toggle="collapse" className="collapsed">
                Вопрос 4? <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div id="faq-list-4" className="collapse" data-parent=".faq-list">
                <p>ответ</p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="400">
              <i className="bx bx-help-circle icon-help"></i>{' '}
              <a data-toggle="collapse" className="collapsed">
                Вопрос 5 ? <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div id="faq-list-5" className="collapse" data-parent=".faq-list">
                <p>ответ</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
