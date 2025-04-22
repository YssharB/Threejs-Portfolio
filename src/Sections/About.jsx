import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";

const About = () => {
  return (
    <section id="about" className="c-space my-20 ">
      <div className="grid xl:grid-cols-3 xlgrid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full ">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container ">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Bonjour, je suis Ysshar.</p>
              <p className="grid-subtext">
                Comptable de formation, je suis passionné par le dev. Ce site
                reflète mon parcours unique, mêlant mes compétences comptables
                et innovations technologiques.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:w-[276px] h-fit object-contain self-center"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                J&apos;utilise{" "}
                <span>
                  React JS, Tailwind CSS, Three JS et de nombreux outils
                  no-code.
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p>
                <span className="grid-headtext">Mon parcours</span>
              </p>
              <p className="grid-subtext">
                Completement autodidacte en programmation, je cherche a me
                perfectionner et a trouver des nouvelles opportunites.
              </p>
              <Button
                name="Voir mon parcours"
                isBeam
                containerClass="w-full mt-10"
              />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Mindset</p>
              <p className="grid-subtext">
                Passionné par le code, l’IA et l’automatisation (Make, n8n,
                Zapier…), je cherche toujours comment faire mieux avec moins.
                Pour moi, chaque problème est une opportunité de tester,
                apprendre, et créer des solutions vraiment utiles — même si ça
                implique de me planter une ou deux fois en chemin.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="xl:col-span-1 xl:row-span-2">
            <div className="grid-container">
              <img
                src="/assets/grid4.png"
                alt="grid-4"
                className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
              />
              <div className="space-y-2">
                <p className="grid-subtext text-center">Contactez-moi</p>
                <div className="copy-container">
                  <img
                    src="/assets/logoLI.png"
                    alt="copy"
                    className="w-8 h-8"
                  />
                  <a
                    cursor="default"
                    id="linkedIn"
                    href="https://www.linkedin.com/in/ysshar-brakecha-3031b8147/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lg:text-xl md:text-xl text-gray_gradient text-white"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
