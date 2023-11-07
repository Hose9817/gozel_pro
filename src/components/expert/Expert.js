import "./expert.scss";

const Expert = () => {
  return (
    <div className="expert">
      <div className="expert_head">
        <img
          className="expert_img"
          src="https://static.edvice.pro/thumbs/upload/800/800/18098652f5b45355_avatar-15f32575-9b15-4e75-ab8a-d3697c70b88e.png"
          alt="expert"
        />
        <div className="expert_starAndLang">
          <div className="expert_stars">
            <img src="/star.png" alt="star" className="expert_star" />
          </div>
          <div className="expert_lang">EN</div>
        </div>
      </div>
      <div className="expert_body">
        <p className="expert_name">Alice Moon</p>
        <p className="expert_specialization">Psycho-help / Motivation</p>
        <p className="expert_descr">Expert Description Bla-bla-bla...</p>
      </div>
      <div className="expert_footer">
        <div className="expert_footer__block">
          <div>
            <p className="expert_experience_and_price"></p> Experince:
            <p className="expert_experience">7 years</p>
          </div>
        </div>
        <div className="expert_footer__block">
          <div>
            <p className="expert_experience_and_price"> Price: </p>
            <p className="expert_price">$100/h</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expert;
