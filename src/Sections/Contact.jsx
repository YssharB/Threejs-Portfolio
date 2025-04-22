import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  // le but est de faire un formulaire de contact qui envoie un email à l'utilisateur
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  // service_2rkwdd3
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,

        {
          from_name: form.name,
          to_name: "Ysshar",
          from_email: form.email,
          to_email: "yssharbrakecha@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setLoading(false);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); // Disparaît après 3s;
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("Une erreur s'est produite, merci de ressayer plus tard.");
    }
    // Réinitialiser le formulaire
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <section id="contact" className="c-space my-20">
      <div className="relative min-h-screen flex justify-center items-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-cover"
        />
        <div className="contact-container">
          <h3 className="head-text">Discutons ensemble.</h3>
          <p className="text-lg text-white-600 mt-3">
            Je suis toujours à la recherche de nouvelles compétences et de
            projets passionnants. N&apos;hésitez pas à me contacter pour
            discuter de vos idées ou de vos avis sur mes projets.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Nom </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Votre nom"
                className="field-input"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Votre email"
                className="field-input"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Votre message </span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Excellent ton portfolio ! (...ou pas)"
                type="text"
                rows={5}
                className="field-input"
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Envoi..." : "Envoyer"}
              <img
                src="/assets/arrow-up.png"
                alt="send"
                className="field-btn_arrow"
              />
            </button>
          </form>
          {showPopup && (
            <div className="mt-6 bg-white text-black px-4 py-3 rounded-xl shadow-lg text-center animate-fade-in transition-opacity duration-300">
              Merci, je vous recontacterai dès que possible ! 🚀
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
