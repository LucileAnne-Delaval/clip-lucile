        /* function pour créer l'animation APRèS le chargement du SVG */


        function anim() {
            tl.pause();
            tl.to("circle", {
                transformOrigin: "center center",
                opacity: 1
            }, 0);

            tl.to("rect", {
                transformOrigin: "center center",
            }, 0);

            tl.to("path", {
                transformOrigin: "center center",
                opacity: 1
            }, 0);



            //reglages

            let date = new Date();


            let heure = 23 - date.getHours();

            let heure2 = date.getHours();

            let heure2b = 200 + 3 * date.getHours();

            //let heureEnPourcentage = gsap.utils.normalize(0,24,heure)*100;

            // let colorHSL = "hsl (250, 24%, "+heureEnPourcentage+"%)";
            // console.log (colorHSL);

            let colorHeure = "rgb(" + heure + "," + heure * 10 + ", " + heure * 35 + " ) ";


            let colorHeure2 = "rgb(" + 255 + "," + heure2b + ", " + heure2 * 6 + " ) ";

            tl.to(".bleu", {
                fill: colorHeure,
                duration: 0
            }, 0);

            tl.to(".jaune", {
                fill: colorHeure2,
                duration: 0
            }, 0);

            tl.to(".strokeB", {
                stroke: colorHeure,
                duration: 0
            }, 0);


            //titre 

            tl.to("#G>*", {
                x: "random([-1000, 1000])",
                y: "random([-1000, 1000])",
                rotate: "random(-360, 360)",
                duration: 0
            }, 0)

            tl.to("#Eaccent>*", {
                x: "random([-1000, 1000])",
                y: "random([-1000, 1000])",
                rotate: "random(-360, 360)",
                duration: 0
            }, 0)

            tl.to("#O>*", {
                x: "random([-1000, 1000])",
                y: "random([-1000, 1000])",
                rotate: "random(-360, 360)",
                duration: 0
            }, 0)

            tl.to("#M>*", {
                x: "random([-1000, 1000])",
                y: "random([-1000, 1000])",
                rotate: "random(-360, 360)",
                duration: 0
            }, 0)

            tl.to("#E>*", {
                x: "random([-1000, 1000])",
                y: "random([-1000, 1000])",
                rotate: "random(-360, 360)",
                duration: 0
            }, 0)

            tl.to("#T>*", {
                x: "random([-1000, 1000])",
                y: "random([-1000, 1000])",
                rotate: "random(-360, 360)",
                duration: 0
            }, 0)

            tl.to("#R>*", {
                x: "random([-1000, 1000])",
                y: "random([-1000, 1000])",
                rotate: "random(-360, 360)",
                duration: 0
            }, 0)

            tl.to("#I>*", {
                x: "random([-1000, 1000])",
                y: "random([-1000, 1000])",
                rotate: "random(-360, 360)",
                duration: 0
            }, 0)

            tl.to("#C>*", {
                x: "random([-1000, 1000])",
                y: "random([-1000, 1000])",
                rotate: "random(-360, 360)",
                duration: 0
            }, 0)

            tl.to("#W>*", {
                x: "random([-1000, 1000])",
                y: "random([-1000, 1000])",
                rotate: "random(-360, 360)",
                duration: 0
            }, 0)

            tl.to("#A>*", {
                x: "random([-1000, 1000])",
                y: "random([-1000, 1000])",
                rotate: "random(-360, 360)",
                duration: 0
            }, 0)

            tl.to("#V>*", {
                x: "random([-1000, 1000])",
                y: "random([-1000, 1000])",
                rotate: "random(-360, 360)",
                duration: 0
            }, 0)

            tl.to("#E2>*", {
                x: "random([-1000, 1000])",
                y: "random([-1000, 1000])",
                rotate: "random(-360, 360)",
                duration: 0
            }, 0)


            tl.to("#G>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.50,
            }, 0)

            tl.to("#Eaccent>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.8,
            }, 0.4)

            tl.to("#O>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.80,
            }, 1.2)

            tl.to("#M>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.80,
            }, 1.7)

            tl.to("#E>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.80,
            }, 2.4)

            tl.to("#T>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.80,
            }, 2.9)

            tl.to("#R>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.80,
            }, 3.6)

            tl.to("#I>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.80,
            }, 4.3)

            tl.to("#C>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.80,
            }, 4.9)

            tl.to("#W>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.80,
            }, 5.4)

            tl.to("#A>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.80,
            }, 6.3)

            tl.to("#V>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.80,
            }, 6.8)

            tl.to("#E2>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.80,
            }, 7.4)

            tl.to("#G>*", {
                x: "random([-1000, 1000])",
                y: "random([-1000, 1000])",
                rotate: "random(-360, 360)",
                duration: 0.4
            }, 8.8)

            tl.to("#Eaccent>*", {
                x: "random([-1000, 1000])",
                y: "random([-1000, 1000])",
                rotate: "random(-360, 360)",
                duration: 0.4
            }, 8.8)

            tl.to("#O>*", {
                x: "random([-1000, 1000])",
                y: "random([-1000, 1000])",
                rotate: "random(-360, 360)",
                duration: 0.4
            }, 8.8)

            tl.to("#M>*", {
                x: "random([-1000, 1000])",
                y: "random([-1000, 1000])",
                rotate: "random(-360, 360)",
                duration: 0.4
            }, 8.8)

            tl.to("#E>*", {
                x: "random([-1000, 1000])",
                y: "random([-1000, 1000])",
                rotate: "random(-360, 360)",
                duration: 0.4
            }, 8.8)

            tl.to("#T>*", {
                x: "random([-1000, 1000])",
                y: "random([-1000, 1000])",
                rotate: "random(-360, 360)",
                duration: 0.4
            }, 8.8)

            tl.to("#R>*", {
                x: "random([-1000, 1000])",
                y: "random([-1000, 1000])",
                rotate: "random(-360, 360)",
                duration: 0.4
            }, 8.8)

            tl.to("#I>*", {
                x: "random([-1000, 1000])",
                y: "random([-1000, 1000])",
                rotate: "random(-360, 360)",
                duration: 0.4
            }, 8.8)

            tl.to("#C>*", {
                x: "random([-1000, 1000])",
                y: "random([-1000, 1000])",
                rotate: "random(-360, 360)",
                duration: 0.4
            }, 8.8)

            tl.to("#W>*", {
                x: "random([-1000, 1000])",
                y: "random([-1000, 1000])",
                rotate: "random(-360, 360)",
                duration: 0.4
            }, 8.8)

            tl.to("#W>*", {
                x: "random([-1000, 1000])",
                y: "random([-1000, 1000])",
                rotate: "random(-360, 360)",
                duration: 0.4
            }, 8.8)

            tl.to("#A>*", {
                x: "random([-1000, 1000])",
                y: "random([-1000, 1000])",
                rotate: "random(-360, 360)",
                duration: 0.4
            }, 8.8)

            tl.to("#V>*", {
                x: "random([-1000, 1000])",
                y: "random([-1000, 1000])",
                rotate: "random(-360, 360)",
                duration: 0.4
            }, 8.8)

            tl.to("#E2>*", {
                x: "random([-1000, 1000])",
                y: "random([-1000, 1000])",
                rotate: "random(-360, 360)",
                duration: 0.4
            }, 8.8)


            tl.to("#bgtitre", {
                opacity: 0,
                duration: 0,
            }, 9.5)





            //mouvement 1e balle
            tl.to("#balle", {

                duration: 0.8,
                immediateRender: true,
                ease: "circ.out",
                motionPath: {
                    path: "#chemin1",
                    align: "#chemin1",
                    alignOrigin: [0.5, 0.5],
                }
            }, 9.1);


            tl.to("#balle", {
                scaleY: 0.6,
                duration: 0.3,
            }, 9.7)
            tl.to("#balle", {
                scaleY: 1,
                duration: 0.2,
            }, 9.9)

            tl.to("#balle", {
                scale: 2,
                duration: 0.62,
                ease: "circ.out",
                immediateRender: true,
                motionPath: {
                    path: "#chemin2a",
                    align: "#chemin2a",
                    alignOrigin: [0.5, 0.5],
                }
            }, 9.9);

            //transformation 1e balle en tache;

            tl.to("#boule", {
                duration: 0.1,
                morphSVG: "#tache"
            }, 10.35);




            //mouvement 2e balle

            tl.to("#balle2", {
                opacity: 0,
                duration: 0
            }, 0)

            tl.to("#balle2", {
                opacity: 1,
                duration: 0.01
            }, 10.59)

            tl.to("#balle2", {

                duration: 0.7,
                immediateRender: true,
                ease: "circ.out",
                motionPath: {
                    path: "#chemin1",
                    align: "#chemin1",
                    alignOrigin: [0.5, 0.5],
                }
            }, 10.6);

            tl.to("#balle2", {
                scaleY: 0.6,
                duration: 0.3,
            }, 11.2)
            tl.to("#balle2", {
                scaleY: 1,
                duration: 0.2,
            }, 11.4)

            tl.to("#balle2", {
                scale: 2,
                duration: 0.62,
                ease: "circ.out",
                immediateRender: true,
                motionPath: {
                    path: "#chemin2b",
                    align: "#chemin2b",
                    alignOrigin: [0.5, 0.5],
                }
            }, 11.4);

            //transformation 2e balle en tache;

            tl.to("#boule2", {
                duration: 0.1,
                morphSVG: "#tache2"
            }, 11.75);



            //mouvement 3e balle

            tl.to("#balle3", {
                opacity: 0,
                duration: 0
            }, 0)

            tl.to("#balle3", {
                opacity: 1,
                duration: 0.01
            }, 11.99)

            tl.to("#balle3", {

                duration: 0.8,
                immediateRender: true,
                ease: "circ.out",
                motionPath: {
                    path: "#chemin1",
                    align: "#chemin1",
                    alignOrigin: [0.5, 0.5],
                }
            }, 12);

            tl.to("#balle3", {
                scaleY: 0.6,
                duration: 0.3,
            }, 12.6)
            tl.to("#balle3", {
                scaleY: 1,
                duration: 0.2,
            }, 12.8)

            tl.to("#balle3", {
                scale: 2,
                duration: 0.62,
                ease: "circ.out",
                immediateRender: true,
                motionPath: {
                    path: "#chemin2c",
                    align: "#chemin2c",
                    alignOrigin: [0.5, 0.5],
                }
            }, 12.8);

            //transformation 3e balle en tache;

            tl.to("#boule3", {
                duration: 0.1,
                morphSVG: "#tache3"
            }, 13.15);



            //mouvement 4e balle

            tl.to("#balle4", {
                opacity: 0,
                duration: 0
            }, 0)


            tl.to("#balle4", {
                opacity: 1,
                duration: 0.01
            }, 13.39)

            tl.to("#balle4", {

                duration: 0.7,
                immediateRender: true,
                ease: "circ.out",
                motionPath: {
                    path: "#chemin1",
                    align: "#chemin1",
                    alignOrigin: [0.5, 0.5],
                }
            }, 13.4);

            tl.to("#balle4", {
                scaleY: 0.6,
                duration: 0.3,
            }, 14)
            tl.to("#balle4", {
                scaleY: 1,
                duration: 0.2,
            }, 14.2)

            tl.to("#balle4", {
                scale: 2,
                duration: 0.62,
                ease: "circ.out",
                immediateRender: true,
                motionPath: {
                    path: "#chemin2d",
                    align: "#chemin2d",
                    alignOrigin: [0.5, 0.5],
                }
            }, 14.2);

            //transformation 4e balle en tache;

            tl.to("#boule4", {
                duration: 0.1,
                morphSVG: "#tache4"
            }, 14.55);

            //mouvement 5e balle
            tl.to("#balle5", {
                opacity: 0,
                duration: 0
            }, 0)


            tl.to("#balle5", {
                opacity: 1,
                duration: 0.01
            }, 14.59)

            tl.to("#balle5", {

                duration: 0.8,
                immediateRender: true,
                ease: "circ.out",
                motionPath: {
                    path: "#chemin1",
                    align: "#chemin1",
                    alignOrigin: [0.5, 0.5],
                }
            }, 14.6);

            tl.to("#balle5", {
                scaleY: 0.6,
                duration: 0.3,
            }, 15.2)
            tl.to("#balle5", {
                scaleY: 1,
                duration: 0.2,
            }, 15.4)

            tl.to("#balle5", {
                scale: 2,
                duration: 0.62,
                ease: "circ.out",
                immediateRender: true,
                motionPath: {
                    path: "#chemin2e",
                    align: "#chemin2e",
                    alignOrigin: [0.5, 0.5],
                }
            }, 15.4);

            //transformation 5e balle en tache;

            tl.to("#boule5", {
                duration: 0.1,
                morphSVG: "#tache5"
            }, 15.75);


            //6e tache 

            tl.to("#tache6", {
                scale: 0,
                y: 350,
                x: 800,
                duration: 0,
            }, 0)

            tl.to("#tache6", {
                scale: 3,
                duration: 0.15,
            }, 16.9)



            //7e tache 

            tl.to("#tache7", {
                scale: 0,
                y: -700,
                x: -400,
                duration: 0,
            }, 0)

            tl.to("#tache7", {
                scale: 3,
                duration: 0.15,
            }, 18.1)

            //8e tache 

            tl.to("#tache8", {
                scale: 0,
                y: -700,
                x: 800,
                duration: 0,
            }, 0)

            tl.to("#tache8", {
                scale: 3,
                duration: 0.15,
            }, 19.2)


            //vibration corde
            //épaisseur fil 

            tl.to("#corde1", {
                duration: 4,
                strokeWidth: 4,
            }, 5)

            tl.to("#corde2", {
                duration: 4,
                strokeWidth: 4,
            }, 5)

            tl.to("#corde3", {
                duration: 4,
                strokeWidth: 4,
            }, 5)

            tl.to("#corde1", {
                duration: 10,
                scaleX: 5,
            }, 9)

            //mvt fil

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: "#corde2"
            }, 5.1);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: "#corde3"
            }, 5.3);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: corde1,
            }, 5.5);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: "#corde2"
            }, 5.9);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: "#corde3"
            }, 6.1);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: corde1,
            }, 6.3);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: "#corde2"
            }, 6.7);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: "#corde3"
            }, 6.9);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: corde1,
            }, 7.1);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: "#corde2"
            }, 7.5);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: "#corde3"
            }, 7.7);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: corde1,
            }, 7.9);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: "#corde2"
            }, 8.3);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: "#corde3"
            }, 8.5);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: corde1,
            }, 8.7);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: "#corde2"
            }, 9.1);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: "#corde3"
            }, 9.3);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: corde1,
            }, 9.5);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: "#corde2"
            }, 9.9);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: "#corde3"
            }, 10.1);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: corde1,
            }, 10.3);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: "#corde2"
            }, 10.7);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: "#corde3"
            }, 10.9);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: corde1,
            }, 11.1);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: "#corde2"
            }, 11.5);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: "#corde3"
            }, 11.7);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: corde1,
            }, 11.9);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: "#corde2"
            }, 12.3);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: "#corde3"
            }, 12.5);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: corde1,
            }, 12.7);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: "#corde2"
            }, 13.1);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: "#corde3"
            }, 13.3);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: corde1,
            }, 13.5);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: "#corde2"
            }, 13.9);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: "#corde3"
            }, 14.1);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: corde1,
            }, 14.3);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: "#corde2"
            }, 14.7);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: "#corde3"
            }, 14.9);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: corde1,
            }, 15.1);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: "#corde2"
            }, 15.5);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: "#corde3"
            }, 15.7);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: corde1,
            }, 15.9);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: "#corde2"
            }, 16.3);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: "#corde3"
            }, 16.5);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: corde1,
            }, 16.7);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: "#corde2"
            }, 17.1);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: "#corde3"
            }, 17.3);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: corde1,
            }, 17.5);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: "#corde2"
            }, 17.9);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: "#corde3"
            }, 18.1);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: corde1,
            }, 18.3);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: "#corde2"
            }, 18.7);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: "#corde3"
            }, 18.9);

            tl.to("#corde1", {
                duration: 0.2,
                morphSVG: corde1,
            }, 19.1);


            //19.1 - 2e phase



            tl.to("#corde1", {
                scaleX: 500,
                duration: 3,

            }, 19.4)

            tl.to("#cercle-jaune", {
                scale: 0,
                duration: 0,
            }, 0)

            tl.to("#cercle-bleu", {
                scale: 0,
                duration: 0,
            }, 0)

            tl.to("#cercle-jaune-2", {
                scale: 0,
                duration: 0,
            }, 0)

            tl.to("#cercle-bleu-2", {
                scale: 0,
                duration: 0,
            }, 0)

            tl.to("#cercle-jaune-3", {
                scale: 0,
                duration: 0,
            }, 0)

            tl.to("#cercle-bleu-3", {
                scale: 0,
                duration: 0,
            }, 0)




            tl.to("#cercle-jaune", {
                scale: 1,
                duration: 1,
            }, 22)

            tl.to("#cercle-bleu", {
                scale: 1.1,
                duration: 1,
            }, 22.3, )

            tl.to("#cercle-bleu", {
                scaleX: 0.5,
                duration: 0.25,
            }, 23.3)

            tl.to("#cercle-bleu", {
                rotate: 30,
                duration: 0.25,
            }, 23.55)

            tl.to("#cercle-bleu", {
                rotate: 0,
                duration: 0.25,
            }, 23.8)

            tl.to("#cercle-bleu", {
                scaleX: 1.1,
                duration: 0.25,
            }, 24.05)

            tl.to("#cercle-jaune", {
                scale: 3,
                duration: 2,
            }, 24.3)



            tl.to("#cercle-bleu", {
                scale: 1.4,
                duration: 0.5
            }, 24.5)

            tl.to("#cercle-jaune-2", {
                scale: 1.1,
                duration: 1,
            }, 25)

            tl.to("#cercle-jaune-2", {
                scaleX: 0.5,
                duration: 0.25,
            }, 26)

            tl.to("#cercle-jaune-2", {
                rotate: -30,
                duration: 0.25,
            }, 26.25)

            tl.to("#cercle-jaune-2", {
                rotate: 0,
                duration: 0.25,
            }, 26.5)

            tl.to("#cercle-jaune-2", {
                scaleX: 1.1,
                duration: 0.25,
            }, 26.75)

            tl.to("#cercle-bleu", {
                scale: 3,
                duration: 2,
            }, 27)



            tl.to("#cercle-jaune-2", {
                scale: 1.4,
                duration: 0.5
            }, 27.2)

            tl.to("#cercle-bleu-2", {
                scale: 1.1,
                duration: 1,
            }, 27.7)

            tl.to("#cercle-bleu-2", {
                scaleY: 0.5,
                duration: 0.25,
            }, 28.7)

            tl.to("#cercle-bleu-2", {
                rotate: 30,
                duration: 0.25,
            }, 28.95)

            tl.to("#cercle-bleu-2", {
                rotate: 0,
                duration: 0.25,
            }, 29.20)

            tl.to("#cercle-bleu-2", {
                scaleY: 1.1,
                duration: 0.25,
            }, 29.45)

            tl.to("#cercle-jaune-2", {
                scale: 3,
                duration: 2,
            }, 29.7)



            tl.to("#cercle-bleu-2", {
                scale: 1.4,
                duration: 0.5
            }, 29.9)

            tl.to("#cercle-jaune-3", {
                scale: 1.1,
                duration: 1,
            }, 30.4)

            tl.to("#cercle-jaune-3", {
                scaleX: 0.5,
                duration: 0.25,
            }, 31.4)

            tl.to("#cercle-jaune-3", {
                rotate: 30,
                duration: 0.25,
            }, 31.65)

            tl.to("#cercle-jaune-3", {
                rotate: 0,
                duration: 0.25,
            }, 31.9)

            tl.to("#cercle-jaune-3", {
                scaleX: 1.1,
                duration: 0.25,
            }, 32.15)

            tl.to("#cercle-bleu-2", {
                scale: 3,
                duration: 2,
            }, 32.4)



            tl.to("#cercle-jaune-3", {
                scale: 1.4,
                duration: 0.5
            }, 32.6)

            tl.to("#cercle-bleu-3", {
                scale: 1.1,
                duration: 1,
            }, 33.1)

            tl.to("#cercle-bleu-3", {
                scaleY: 0.5,
                duration: 0.25,
            }, 34.1)

            tl.to("#cercle-bleu-3", {
                rotate: -30,
                duration: 0.25,
            }, 34.35)

            tl.to("#cercle-bleu-3", {
                rotate: 0,
                duration: 0.25,
            }, 34.60)

            tl.to("#cercle-bleu-3", {
                scaleY: 1.1,
                duration: 0.25,
            }, 34.85)

            tl.to("#cercle-jaune-3", {
                scale: 3,
                duration: 2,
            }, 35.1)



            //phase 3  : clignottement

            tl.to("#cercle-bleu-3", {
                opacity: 0,
                duration: 0.1,
            }, 36)

            tl.to("#cercle-bleu-3", {
                opacity: 1,
                duration: 0.1,
            }, 36.1)

            tl.to("#cercle-bleu-3", {
                opacity: 0,
                duration: 0.1,
            }, 36.2)

            tl.to("#cercle-bleu-3", {
                opacity: 1,
                duration: 0.1,
            }, 36.3)

            tl.to("#cercle-bleu-3", {
                opacity: 0,
                duration: 0.1,
            }, 36.4)

            tl.to("#cercle-bleu-3", {
                opacity: 1,
                duration: 0.1,
            }, 36.5)

            tl.to("#cercle-bleu-3", {
                opacity: 0,
                duration: 0.1,
            }, 36.6)

            tl.to("#cercle-bleu-3", {
                opacity: 1,
                duration: 0.1,
            }, 36.7)

            tl.to("#cercle-bleu-3", {
                opacity: 0,
                duration: 0.1,
            }, 36.8)

            tl.to("#cercle-bleu-3", {
                opacity: 1,
                duration: 0.1,
            }, 36.9)

            tl.to("#cercle-bleu-3", {
                opacity: 0,
                duration: 0.1,
            }, 37)

            tl.to("#cercle-bleu-3", {
                opacity: 1,
                duration: 0.1,
            }, 37.1)

            tl.to("#cercle-bleu-3", {
                opacity: 0,
                duration: 0.1,
            }, 37.2)

            tl.to("#cercle-bleu-3", {
                opacity: 1,
                duration: 0.1,
            }, 37.3)

            tl.to("#cercle-bleu-3", {
                opacity: 0,
                duration: 0.1,
            }, 37.4)

            tl.to("#cercle-bleu-3", {
                opacity: 1,
                duration: 0.1,
            }, 37.5)

            tl.to("#cercle-bleu-3", {
                opacity: 0,
                duration: 0.1,
            }, 37.6)

            tl.to("#cercle-bleu-3", {
                opacity: 1,
                duration: 0.1,
            }, 37.7)

            tl.to("#cercle-bleu-3", {
                opacity: 0,
                duration: 0.1,
            }, 37.8)

            tl.to("#cercle-bleu-3", {
                opacity: 1,
                duration: 0.1,
            }, 37.9)

            tl.to("#cercle-bleu-3", {
                opacity: 0,
                duration: 0.1,
            }, 38)

            tl.to("#cercle-bleu-3", {
                opacity: 1,
                duration: 0.1,
            }, 38.1)

            tl.to("#cercle-bleu-3", {
                opacity: 0,
                duration: 0.1,
            }, 38.2)

            tl.to("#cercle-bleu-3", {
                opacity: 1,
                duration: 0.1,
            }, 38.3)

            tl.to("#cercle-bleu-3", {
                opacity: 0,
                duration: 0.1,
            }, 38.4)

            tl.to("#cercle-bleu-3", {
                opacity: 1,
                duration: 0.1,
            }, 38.5)

            tl.to("#cercle-bleu-3", {
                opacity: 0,
                duration: 0.1,
            }, 38.6)

            tl.to("#cercle-bleu-3", {
                opacity: 1,
                duration: 0.1,
            }, 38.7)

            tl.to("#cercle-bleu-3", {
                opacity: 0,
                duration: 0.1,
            }, 38.9)

            tl.to("#cercle-bleu-3", {
                opacity: 1,
                duration: 0.1,
            }, 39)

            tl.to("#cercle-bleu-3", {
                opacity: 0,
                duration: 0.1,
            }, 39.1)

            tl.to("#cercle-bleu-3", {
                opacity: 1,
                duration: 0.1,
            }, 39.2)


            tl.to("#cercle-bleu-3", {
                opacity: 0,
                duration: 0.1,
            }, 39.3)

            tl.to("#cercle-bleu-3", {
                opacity: 1,
                duration: 0.1,
            }, 39.4)


            tl.to("#cercle-bleu-3", {
                opacity: 0,
                duration: 0.1,
            }, 39.5)

            tl.to("#cercle-bleu-3", {
                opacity: 1,
                duration: 0.1,
            }, 39.6)

            tl.to("#cercle-bleu-3", {
                opacity: 0,
                duration: 0.1,
            }, 39.7)

            tl.to("#cercle-bleu-3", {
                opacity: 1,
                duration: 0.1,
            }, 39.8)

            tl.to("#cercle-bleu-3", {
                opacity: 0,
                duration: 0.1,
            }, 39.9)

            tl.to("#cercle-bleu-3", {
                opacity: 1,
                duration: 0.1,
            }, 40)


            // phase 3 : halo


            // halo 1

            tl.to("#halo-1", {
                scale: 0,
                duration: 0,

            }, 0)

            tl.to("#halo-1", {
                scale: 3,
                duration: 2,
            }, 40)

            tl.to("#cercle-bleu-3", {
                scale: 1.2,
                duration: 0.25,
            }, 40)

            tl.to("#cercle-bleu-3", {
                scale: 1.15,
                duration: 0.25,
            }, 40.25)



            // halo 2

            tl.to("#halo-2", {
                scale: 0,
                duration: 0,

            }, 0)


            tl.to("#halo-2", {
                scale: 3,
                duration: 2,
            }, 40.5)


            tl.to("#cercle-bleu-3", {
                scale: 1.2,
                duration: 0.25,
            }, 40.5)

            tl.to("#cercle-bleu-3", {
                scale: 1.15,
                duration: 0.25,
            }, 40.75)



            //halo 3

            tl.to("#halo-3", {
                scale: 0,
                duration: 0,

            }, 0)


            tl.to("#halo-3", {
                scale: 3,
                duration: 2,
            }, 41)


            tl.to("#cercle-bleu-3", {
                scale: 1.2,
                duration: 0.25,
            }, 41)

            tl.to("#cercle-bleu-3", {
                scale: 1.15,
                duration: 0.25,
            }, 41.25)


            //halo 4

            tl.to("#halo-4", {
                scale: 0,
                duration: 0,

            }, 0)


            tl.to("#halo-4", {
                scale: 3,
                duration: 2,
            }, 41.5)


            tl.to("#cercle-bleu-3", {
                scale: 1.2,
                duration: 0.25,
            }, 41.5)

            tl.to("#cercle-bleu-3", {
                scale: 1.15,
                duration: 0.25,
            }, 41.75)


            //halo 5

            tl.to("#halo-5", {
                scale: 0,
                duration: 0,

            }, 0)


            tl.to("#halo-5", {
                scale: 3,
                duration: 2,
            }, 42)


            tl.to("#cercle-bleu-3", {
                scale: 1.2,
                duration: 0.25,
            }, 42)

            tl.to("#cercle-bleu-3", {
                scale: 1.15,
                duration: 0.25,
            }, 42.25)



            // ding ding : 42.3 

            tl.to("#bande-1", {
                scaleX: 0,
                duration: 0,
            }, 0)

            tl.to("#bande-2", {
                scaleX: 0,
                duration: 0,
            }, 0)


            tl.to("#bande-1", {
                scaleX: 1,
                duration: 0.3,
            }, 42.6)




            tl.to("#bande-2", {
                scaleX: 1,
                duration: 0.3,
            }, 42.8)


            //halo 6

            tl.to("#halo-6", {
                scale: 0,
                duration: 0,

            }, 0)


            tl.to("#halo-6", {
                scale: 3,
                duration: 2,
            }, 42.5)


            tl.to("#cercle-bleu-3", {
                scale: 1.2,
                duration: 0.25,
            }, 42.5)

            tl.to("#cercle-bleu-3", {
                scale: 1.15,
                duration: 0.25,
            }, 42.75)


            //halo 7

            tl.to("#halo-7", {
                scale: 0,
                duration: 0,

            }, 0)


            tl.to("#halo-7", {
                scale: 3,
                duration: 2,
            }, 43)


            tl.to("#cercle-bleu-3", {
                scale: 1.2,
                duration: 0.25,
            }, 43)

            tl.to("#cercle-bleu-3", {
                scale: 1.15,
                duration: 0.25,
            }, 43.25)


            //halo 8

            tl.to("#halo-8", {
                scale: 0,
                duration: 0,

            }, 0)


            tl.to("#halo-8", {
                scale: 3,
                duration: 2,
            }, 43.5)


            tl.to("#cercle-bleu-3", {
                scale: 1.2,
                duration: 0.25,
            }, 43.5)

            tl.to("#cercle-bleu-3", {
                scale: 1.15,
                duration: 0.25,
            }, 43.75)


            //halo 9

            tl.to("#halo-9", {
                scale: 0,
                duration: 0,

            }, 0)


            tl.to("#halo-9", {
                scale: 3,
                duration: 2,
            }, 44)


            tl.to("#cercle-bleu-3", {
                scale: 1.2,
                duration: 0.25,
            }, 44)

            tl.to("#cercle-bleu-3", {
                scale: 1.15,
                duration: 0.25,
            }, 44.25)



            //fond-bleu
            tl.to("#cercle-bleu-3", {
                scale: 3,
                duration: 1,
            }, 45)


            //bandes-verticales

            tl.to("#bande-v-1", {
                scaleY: 0,
                duration: 0,
            }, 0)

            tl.to("#bande-v-2", {
                scaleY: 0,
                duration: 0,
            }, 0)

            tl.to("#bande-v-3", {
                scaleY: 0,
                duration: 0,
            }, 0)


            tl.to("#bande-v-1", {
                scaleY: 2,
                duration: 0.5,
            }, 46.5)


            tl.to("#bande-v-2", {
                scaleY: 2,
                duration: 0.5,
            }, 47.8)

            tl.to("#bande-v-3", {
                scaleY: 2,
                duration: 0.5,
            }, 49.1)


            // fond bleu : bandes qui disparaissent

            tl.to("#bande-1", {
                scaleY: 0,
                duration: 0.5,
            }, 50.4)

            tl.to("#bande-2", {
                scaleY: 0,
                duration: 0.5,
            }, 50.4)

            tl.to("#bande-v-1", {
                scaleX: 0,
                duration: 0.5,
            }, 50.4)

            tl.to("#bande-v-2", {
                scaleX: 0,
                duration: 0.5,
            }, 50.4)

            tl.to("#bande-v-3", {
                scaleX: 0,
                duration: 0.5,
            }, 50.4)

            //bulles


            //ssetup
            tl.to("#gc1", {
                scale: 0,
                duration: 0,
            }, 0)

            tl.to("#gc2", {
                scale: 0,
                duration: 0,
            }, 0)

            tl.to("#gc3", {
                scale: 0,
                duration: 0,
            }, 0)

            tl.to("#gc4", {
                scale: 0,
                duration: 0,
            }, 0)

            tl.to("#gc5", {
                scale: 0,
                duration: 0,
            }, 0)

            tl.to("#gc6", {
                scale: 0,
                duration: 0,
            }, 0)

            tl.to("#gc7", {
                scale: 0,
                duration: 0,
            }, 0)

            tl.to("#gc8", {
                scale: 0,
                duration: 0,
            }, 0)

            tl.to("#pc1", {
                scale: 0,
                duration: 0,
            }, 0)

            tl.to("#pc2", {
                scale: 0,
                duration: 0,
            }, 0)

            tl.to("#pc3", {
                scale: 0,
                duration: 0,
            }, 0)

            tl.to("#pc4", {
                scale: 0,
                duration: 0,
            }, 0)

            tl.to("#pc5", {
                scale: 0,
                duration: 0,
            }, 0)


            tl.to("#pc6", {
                scale: 0,
                duration: 0,
            }, 0)

            tl.to("#pc7", {
                scale: 0,
                duration: 0,
            }, 0)

            tl.to("#pc8", {
                scale: 0,
                duration: 0,
            }, 0)

            //anim

            tl.to("#gc1", {
                scale: 1,
                duration: 0.2,
            }, 50.6)

            tl.to("#pc1", {
                scale: 1,
                duration: 0.1,
            }, 50.8)


            tl.to("#gc3", {
                scale: 1,
                duration: 0.2,
            }, 52)

            tl.to("#pc3", {
                scale: 1,
                duration: 0.1,
            }, 52.2)



            tl.to("#gc5", {
                scale: 1,
                duration: 0.2,
            }, 53.2)

            tl.to("#pc5", {
                scale: 1,
                duration: 0.1,
            }, 53.4)


            tl.to("#gc4", {
                scale: 1,
                duration: 0.2,
            }, 54.4)

            tl.to("#pc4", {
                scale: 1,
                duration: 0.1,
            }, 54.6)

            tl.to("#gc2", {
                scale: 1,
                duration: 0.2,
            }, 55.8)

            tl.to("#pc2", {
                scale: 1,
                duration: 0.1,
            }, 56)


            tl.to("#gc6", {
                scale: 1,
                duration: 0.2,
            }, 57)

            tl.to("#pc6", {
                scale: 1,
                duration: 0.1,
            }, 57.2)


            tl.to("#gc7", {
                scale: 1,
                duration: 0.2,
            }, 58.2)

            tl.to("#pc7", {
                scale: 1,
                duration: 0.1,
            }, 58.4)

            tl.to("#gc8", {
                scale: 1,
                duration: 0.2,
            }, 59.5)

            tl.to("#pc8", {
                scale: 1,
                duration: 0.1,
            }, 59.7)


            tl.to("#gc1", {
                scale: 3,
                duration: 0.8,
            }, 59.8)

            tl.to("#gc2", {
                scale: 3,
                duration: 0.8,
            }, 59.8)

            tl.to("#gc3", {
                scale: 3,
                duration: 0.8,
            }, 59.8)

            tl.to("#gc4", {
                scale: 3,
                duration: 0.8,
            }, 59.8)

            tl.to("#gc5", {
                scale: 4,
                duration: 0.8,
            }, 59.8)

            tl.to("#gc6", {
                scale: 3,
                duration: 0.8,
            }, 59.8)

            tl.to("#gc7", {
                scale: 3,
                duration: 0.8,
            }, 59.8)

            tl.to("#gc8", {
                scale: 3,
                duration: 0.8,
            }, 59.8)

            tl.to("#pc1", {
                scale: 0,
                duration: 1.3,
            }, 59.8)

            tl.to("#pc2", {
                scale: 0,
                duration: 1.3,
            }, 59.8)

            tl.to("#pc3", {
                scale: 0,
                duration: 1.3,
            }, 59.8)

            tl.to("#pc4", {
                scale: 0,
                duration: 1.3,
            }, 59.8)

            tl.to("#pc5", {
                scale: 0,
                duration: 1.3,
            }, 59.8)

            tl.to("#pc6", {
                scale: 0,
                duration: 1.3,
            }, 59.8)

            tl.to("#pc7", {
                scale: 0,
                duration: 1.3,
            }, 59.8)

            tl.to("#pc8", {
                scale: 0,
                duration: 1.3,
            }, 59.8)





            //grille

            tl.to("#rgrille", {
                opacity: 0,
                duration: 0,

            }, 0)


            tl.to("#colonne1", {
                y: 1080,
                duration: 0.8,
            }, 60.8)

            tl.to("#colonne2", {
                y: -1080,
                duration: 0.8,
            }, 61.5)

            tl.to("#colonne3", {
                y: 1080,
                duration: 0.8,
            }, 62.1)

            tl.to("#colonne4", {
                y: -1080,
                duration: 0.8,
            }, 62.7)

            tl.to("#rang1g", {
                x: 960,
                duration: 0.2,
            }, 63.1)

            tl.to("#rang1d", {
                x: -960,
                duration: 0.2,
            }, 63.1)

            tl.to("#rang2g", {
                x: 960,
                duration: 0.2,
            }, 63.3)

            tl.to("#rang2d", {
                x: -960,
                duration: 0.2,
            }, 63.3)

            tl.to("#rgrille", {
                opacity: 1,
                duration: 0,
            }, 63.5)

            tl.to("#r00", {
                scale: 0.9,
                transformOrigin: "100%, 100%",
                x: 50,
                duration: 1.5,
            }, 63.5)

            tl.to("#r01", {
                scale: 0.9,
                transformOrigin: "100%, 50%",
                x: 50,
                duration: 1.5,
            }, 63.5)

            tl.to("#r02", {
                scale: 0.9,
                transformOrigin: "100%, 0%",
                x: 50,
                duration: 1.5,
            }, 63.5)


            tl.to("#r10", {
                scale: 0.95,
                transformOrigin: "100%, 100%",
                x: 40,
                duration: 1.5,
            }, 63.8)

            tl.to("#r11", {
                scale: 0.95,
                transformOrigin: "100%, 50%",
                x: 40,
                duration: 1.5,
            }, 63.8)

            tl.to("#r12", {
                scale: 0.95,
                transformOrigin: "100%, 0%",
                x: 40,
                duration: 1.5,
            }, 63.8)


            tl.to("#r20", {
                scale: 1,
                transformOrigin: "100%, 100%",
                x: 30,
                duration: 1.5,
            }, 64)

            tl.to("#r21", {
                scale: 1,
                transformOrigin: "100%, 50%",
                x: 30,
                duration: 1.5,
            }, 64)

            tl.to("#r22", {
                scale: 1,
                transformOrigin: "100%, 0%",
                x: 30,
                duration: 1.5,
            }, 64)


            tl.to("#r30", {
                scale: 1.1,
                transformOrigin: "100%, 100%",
                x: 40,
                duration: 1.5,
            }, 64.2)

            tl.to("#r31", {
                scale: 1.05,
                transformOrigin: "100%, 50%",
                x: 40,
                duration: 1.5,
            }, 64.2)

            tl.to("#r32", {
                scale: 1.05,
                transformOrigin: "100%, 0%",
                x: 40,
                duration: 1.5,
            }, 64.2)



            //mvt grille 2

            tl.to("#r00", {
                scale: 1,
                transformOrigin: "100%, 100%",
                x: 0,
                duration: 1.5,
            }, 65.5)

            tl.to("#r01", {
                scale: 1,
                transformOrigin: "100%, 50%",
                x: 0,
                duration: 1.5,
            }, 65.5)

            tl.to("#r02", {
                scale: 1,
                transformOrigin: "100%, 0%",
                x: 0,
                duration: 1.5,
            }, 65.5)


            tl.to("#r10", {
                scale: 1,
                transformOrigin: "100%, 100%",
                x: 0,
                duration: 1.5,
            }, 65.8)

            tl.to("#r11", {
                scale: 1,
                transformOrigin: "100%, 50%",
                x: 0,
                duration: 1.5,
            }, 65.8)

            tl.to("#r12", {
                scale: 1,
                transformOrigin: "100%, 0%",
                x: 0,
                duration: 1.5,
            }, 65.8)


            tl.to("#r20", {
                scale: 1,
                transformOrigin: "100%, 100%",
                x: 0,
                duration: 1.5,
            }, 66)

            tl.to("#r21", {
                scale: 1,
                transformOrigin: "100%, 50%",
                x: 0,
                duration: 1.5,
            }, 66)

            tl.to("#r22", {
                scale: 1,
                transformOrigin: "100%, 0%",
                x: 0,
                duration: 1.5,
            }, 66)


            tl.to("#r30", {
                scale: 1,
                transformOrigin: "100%, 100%",
                x: 0,
                duration: 1.5,
            }, 66.2)

            tl.to("#r31", {
                scale: 1,
                transformOrigin: "100%, 50%",
                x: 0,
                duration: 1.5,
            }, 66.2)

            tl.to("#r32", {
                scale: 1,
                transformOrigin: "100%, 0%",
                x: 0,
                duration: 1.5,
            }, 66.2)



            tl.to("#rgrille", {
                opacity: 0,
                duration: 0,
            }, 67.71)

            tl.to("#petitscarres", {
                opacity: 0,
                duration: 0,
            }, 0)

            tl.to("#petitscarres", {
                opacity: 1,
                duration: 0,
            }, 67.7)


            tl.to("#petitegrille>*", {
                x: "random(-300, 300)",
                y: "random(-300, 300)",
                rotate: "random(-330, 330)",
                duration: 1
            }, 68)

            tl.to("#petitegrille>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 1
            }, 69.3)




            //bimboop1

            tl.to("#petitscarres2", {
                opacity: 0,
                duration: 0,
            }, 0)

            tl.to("#petitscarres2", {
                opacity: 1,
                duration: 0,
            }, 70.3)

            tl.to("#petitegrille", {
                opacity: 0,
                duration: 0,
            }, 70.31)

            tl.to("#R00>*", {
                x: "random([-50, 50])",
                y: "random([-50, 50])",
                rotate: "random([-90, -60, -30, 30, 60, 90])",
                duration: 0.3
            }, 70.9)

            tl.to("#R00>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.3
            }, 71.2)



            tl.to("#R03>*", {
                x: "random([-50, 50])",
                y: "random([-50, 50])",
                rotate: "random([-90, -60, -30, 30, 60, 90])",
                duration: 0.3
            }, 70.9)

            tl.to("#R03>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.3
            }, 71.2)



            tl.to("#R12>*", {
                x: "random([-50, 50])",
                y: "random([-50, 50])",
                rotate: "random([-90, -60, -30, 30, 60, 90])",
                duration: 0.3
            }, 70.9)

            tl.to("#R12>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.3
            }, 71.2)




            tl.to("#R14>*", {
                x: "random([-50, 50])",
                y: "random([-50, 50])",
                rotate: "random([-90, -60, -30, 30, 60, 90])",
                duration: 0.3
            }, 70.9)


            tl.to("#R14>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.3
            }, 71.2)



            tl.to("#R20>*", {
                x: "random([-50, 50])",
                y: "random([-50, 50])",
                rotate: "random([-90, -60, -30, 30, 60, 90])",
                duration: 0.3
            }, 70.9)

            tl.to("#R20>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.3
            }, 71.2)



            tl.to("#R21>*", {
                x: "random([-50, 50])",
                y: "random([-50, 50])",
                rotate: "random([-90, -60, -30, 30, 60, 90])",
                duration: 0.3
            }, 70.9)


            tl.to("#R21>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.3
            }, 71.2)


            //bimboop2

            tl.to("#R01>*", {
                x: "random([-50, 50])",
                y: "random([-50, 50])",
                rotate: "random([-90, -60, -30, 30, 60, 90])",
                duration: 0.3
            }, 72.3)


            tl.to("#R01>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.3
            }, 72.6)




            tl.to("#R04>*", {
                x: "random([-50, 50])",
                y: "random([-50, 50])",
                rotate: "random([-90, -60, -30, 30, 60, 90])",
                duration: 0.3
            }, 72.3)


            tl.to("#R04>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.3
            }, 72.6)




            tl.to("#R12>*", {
                x: "random([-50, 50])",
                y: "random([-50, 50])",
                rotate: "random([-90, -60, -30, 30, 60, 90])",
                duration: 0.3
            }, 72.3)


            tl.to("#R12>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.3
            }, 72.6)



            tl.to("#R13>*", {
                x: "random([-50, 50])",
                y: "random([-50, 50])",
                rotate: "random([-90, -60, -30, 30, 60, 90])",
                duration: 0.3
            }, 72.3)


            tl.to("#R13>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.3
            }, 72.6)





            tl.to("#R24>*", {
                x: "random([-50, 50])",
                y: "random([-50, 50])",
                rotate: "random([-90, -60, -30, 30, 60, 90])",
                duration: 0.3
            }, 72.3)


            tl.to("#R24>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.3
            }, 72.6)



            //bimboop3

            tl.to("#R02>*", {
                x: "random([-50, 50])",
                y: "random([-50, 50])",
                rotate: "random([-90, -60, -30, 30, 60, 90])",
                duration: 0.3
            }, 73.7)


            tl.to("#R02>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.3
            }, 74)



            tl.to("#R10>*", {
                x: "random([-50, 50])",
                y: "random([-50, 50])",
                rotate: "random([-90, -60, -30, 30, 60, 90])",
                duration: 0.3
            }, 73.7)


            tl.to("#R10>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.3
            }, 74)



            tl.to("#R12>*", {
                x: "random([-50, 50])",
                y: "random([-50, 50])",
                rotate: "random([-90, -60, -30, 30, 60, 90])",
                duration: 0.3
            }, 73.7)


            tl.to("#R12>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.3
            }, 74)



            tl.to("#R14>*", {
                x: "random([-50, 50])",
                y: "random([-50, 50])",
                rotate: "random([-90, -60, -30, 30, 60, 90])",
                duration: 0.3
            }, 73.7)


            tl.to("#R14>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.3
            }, 74)



            tl.to("#R20>*", {
                x: "random([-50, 50])",
                y: "random([-50, 50])",
                rotate: "random([-90, -60, -30, 30, 60, 90])",
                duration: 0.3
            }, 73.7)


            tl.to("#R20>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.3
            }, 74)


            tl.to("#R21>*", {
                x: "random([-50, 50])",
                y: "random([-50, 50])",
                rotate: "random([-90, -60, -30, 30, 60, 90])",
                duration: 0.3
            }, 73.7)


            tl.to("#R21>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.3
            }, 74)



            tl.to("#R23>*", {
                x: "random([-50, 50])",
                y: "random([-50, 50])",
                rotate: "random([-90, -60, -30, 30, 60, 90])",
                duration: 0.3
            }, 73.7)


            tl.to("#R23>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.3
            }, 74)



            //bimboop4

            tl.to("#R12>*", {
                x: "random([-50, 50])",
                y: "random([-50, 50])",
                rotate: "random([-90, -60, -30, 30, 60, 90])",
                duration: 0.3
            }, 75.1)


            tl.to("#R12>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.3
            }, 75.4)



            tl.to("#R11>*", {
                x: "random([-50, 50])",
                y: "random([-50, 50])",
                rotate: "random([-90, -60, -30, 30, 60, 90])",
                duration: 0.3
            }, 75.1)


            tl.to("#R11>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.3
            }, 75.4)


            tl.to("#R13>*", {
                x: "random([-50, 50])",
                y: "random([-50, 50])",
                rotate: "random([-90, -60, -30, 30, 60, 90])",
                duration: 0.3
            }, 75.1)


            tl.to("#R13>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.3
            }, 75.4)

            //bimboop5

            tl.to("#R00>*", {
                x: "random([-50, 50])",
                y: "random([-50, 50])",
                rotate: "random([-90, -60, -30, 30, 60, 90])",
                duration: 0.3
            }, 76.5)


            tl.to("#R00>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.3
            }, 76.8)

            tl.to("#R04>*", {
                x: "random([-50, 50])",
                y: "random([-50, 50])",
                rotate: "random([-90, -60, -30, 30, 60, 90])",
                duration: 0.3
            }, 76.5)


            tl.to("#R04>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.3
            }, 76.8)

            tl.to("#R24>*", {
                x: "random([-50, 50])",
                y: "random([-50, 50])",
                rotate: "random([-90, -60, -30, 30, 60, 90])",
                duration: 0.3
            }, 76.5)


            tl.to("#R24>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.3
            }, 76.8)


            tl.to("#R20>*", {
                x: "random([-50, 50])",
                y: "random([-50, 50])",
                rotate: "random([-90, -60, -30, 30, 60, 90])",
                duration: 0.3
            }, 76.5)


            tl.to("#R20>*", {
                x: 0,
                y: 0,
                rotate: 0,
                duration: 0.3
            }, 76.8)




            // échelle ligne milieu      

            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 0.99,
                duration: 0.05
            }, 70.1)

            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 0.995,
                duration: 0.05
            }, 70.3)

            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 1,
                duration: 0.05
            }, 70.5)



            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 0.99,
                duration: 0.05
            }, 70.8)

            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 0.995,
                duration: 0.05
            }, 71)

            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 1,
                duration: 0.05
            }, 71.2)




            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 0.985,
                duration: 0.05
            }, 71.5)

            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 0.992,
                duration: 0.05
            }, 71.7)

            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 1,
                duration: 0.05
            }, 71.9)


            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 0.98,
                duration: 0.05
            }, 72.2)

            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 0.99,
                duration: 0.05
            }, 72.4)

            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 1,
                duration: 0.05
            }, 72.6)





            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 0.97,
                duration: 0.05
            }, 72.9)

            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 0.985,
                duration: 0.05
            }, 73.1)

            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 1,
                duration: 0.05
            }, 73.3)


            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 0.95,
                duration: 0.05
            }, 73.6)

            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 0.975,
                duration: 0.05
            }, 73.8)

            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 1,
                duration: 0.05
            }, 74)


            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 0.92,
                duration: 0.05
            }, 74.3)

            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 0.96,
                duration: 0.05
            }, 74.5)

            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 1,
                duration: 0.05
            }, 74.7)



            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 0.9,
                duration: 0.05
            }, 75)

            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 0.955,
                duration: 0.05
            }, 75.2)

            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 1.01,
                duration: 0.05
            }, 75.4)



            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 0.88,
                duration: 0.05
            }, 75.7)

            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 0.94,
                duration: 0.05
            }, 75.9)

            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 1.02,
                duration: 0.05
            }, 76.1)



            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 0.86,
                duration: 0.05
            }, 76.4)

            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 0.93,
                duration: 0.05
            }, 76.6)

            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 1.03,
                duration: 0.05
            }, 76.8)



            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 0.84,
                duration: 0.05
            }, 77.1)

            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 0.92,
                duration: 0.05
            }, 77.3)

            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 1.04,
                duration: 0.05
            }, 77.5)


            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 0.84,
                duration: 0.05
            }, 77.8)

            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 0.92,
                duration: 0.05
            }, 78)

            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 1.05,
                duration: 0.05
            }, 78.2)

            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 0.83,
                duration: 0.05
            }, 78.5)

            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 0.92,
                duration: 0.05
            }, 78.7)

            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 1.05,
                duration: 0.05
            }, 78.9)

            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 0.82,
                duration: 0.05
            }, 79.2)

            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 0.91,
                duration: 0.05
            }, 79.4)

            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 1.05,
                duration: 0.05
            }, 79.6)

            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 0.81,
                duration: 0.05
            }, 79.9)

            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 0.91,
                duration: 0.05
            }, 80.1)

            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 1.05,
                duration: 0.05
            }, 80.3)

            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 0.8,
                duration: 0.05
            }, 80.6)

            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 0.9,
                duration: 0.05
            }, 80.8)

            tl.to("#C1", {
                transformOrigin: "50%, 50%",
                scaleY: 1,
                duration: 0.05
            }, 80.95)




            //fin 

            tl.to("#petitscarres2", {
                opacity: 0,
                duration: 0,
            }, 80.99)

            tl.to("#petitegrille", {
                opacity: 1,
                duration: 0,
            }, 80.98)


            tl.to("#petitegrille>*", {
                x: "random(-1000, 1000)",
                y: "random(-1000, 1000)",
                rotate: "random(-359, 359)",
                scale: 0,
                stagger: 0.003,
                duration: 20
            }, 81)



            //credits 

            tl.to ("#credits", {
                opacity: 0,
                duration: 0,
            }, 0)
            tl.to ("#credits", {
                opacity: 1,
                duration: 5, 

            }, 84)


            tl.to ("#credits", {
                opacity: 0,
                duration: 5, 

            }, 95)





        }