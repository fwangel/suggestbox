/**
 * Created by Ascarbek on 01.12.2015.
 */
(function(){
    'use strict';

    angular
        .module('demo', ['azSuggestBox'])
        .controller('demo', ['$scope', function($scope){
            /*this.items = [
                {id: 0, text: 'text1'},
                {id: 1, text: 'text2'},
                {id: 2, text: 'text3'}
            ];*/

            this.items = [
                {
                    "name" : "Halle Berry",
                    "password" : "d%T6HL|s10Sb&0p",
                    "cc" : "4929933097411625",
                    "lorem" : "Amet consectetur adipiscing.",
                    "email" : "in@amet.com",
                    "date" : "09/06/2008"
                },
                {
                    "name" : "Julia Roberts",
                    "password" : "*O71d=OCqPue94!",
                    "cc" : "4485236820938088",
                    "lorem" : "Dapibus ultrices in iaculis nunc sed augue lacus.",
                    "email" : "nec@faucibus.com",
                    "date" : "22/12/2012"
                },
                {
                    "name" : "Leighton Meester",
                    "password" : "t3,:X55[CHGf1ie",
                    "cc" : "4539397204545547",
                    "lorem" : "Pretium aenean pharetra magna ac placerat vestibulum lectus mauris.",
                    "email" : "enim@tempus.com",
                    "date" : "01/12/2008"
                },
                {
                    "name" : "Brittany Snow",
                    "password" : "fg%CDK=14A52ho$",
                    "cc" : "4539226759728630",
                    "lorem" : "Laoreet suspendisse interdum consectetur.",
                    "email" : "tellus@tristique.com",
                    "date" : "04/08/2014"
                },
                {
                    "name" : "Tom Hardy",
                    "password" : "vR0198xV=tDu+_F",
                    "cc" : "4716543062402934",
                    "lorem" : "Sit amet dictum sit amet justo donec enim diam vulputate.",
                    "email" : "nisi@condimentum.com",
                    "date" : "22/04/2009"
                },
                {
                    "name" : "Marion Cotillard",
                    "password" : "#_D55F%D79hgXoc",
                    "cc" : "4929071771590099",
                    "lorem" : "Sed ullamcorper morbi tincidunt ornare massa eget egestas.",
                    "email" : "feugiat@placerat.com",
                    "date" : "11/10/2014"
                },
                {
                    "name" : "Melissa McCarthy",
                    "password" : "d7iW?9bG*3PeK2+",
                    "cc" : "4532252146846429",
                    "lorem" : "Vel risus commodo viverra maecenas.",
                    "email" : "imperdiet@enim.com",
                    "date" : "30/12/2005"
                },
                {
                    "name" : "Salma Hayek",
                    "password" : "gDHl9=MK9.20sp@",
                    "cc" : "4024007128329330",
                    "lorem" : "Eu scelerisque felis imperdiet proin fermentum leo vel.",
                    "email" : "gravida@nibh.com",
                    "date" : "30/11/2010"
                },
                {
                    "name" : "Emilio Estevez",
                    "password" : "B:987uP+Wn:3Ehn",
                    "cc" : "4716372877675678",
                    "lorem" : "Tempus iaculis urna id volutpat lacus laoreet non curabitur.",
                    "email" : "hendrerit@sit.com",
                    "date" : "31/01/2013"
                },
                {
                    "name" : "Alice Eve",
                    "password" : "$$097CQB&W9hwec",
                    "cc" : "4916074496865783",
                    "lorem" : "Nunc id cursus metus aliquam eleifend.",
                    "email" : "vitae@feugiat.com",
                    "date" : "22/07/2009"
                },
                {
                    "name" : "Jonathan Rhys Meyers",
                    "password" : "IWW40p;A31yd?q@",
                    "cc" : "4556172935533502",
                    "lorem" : "Enim facilisis gravida neque convallis.",
                    "email" : "ipsum@odio.com",
                    "date" : "18/07/2013"
                },
                {
                    "name" : "Alfie Allen",
                    "password" : ";Y66t3WA$9sA(xe",
                    "cc" : "4556842071959998",
                    "lorem" : "Facilisis mauris sit amet massa vitae tortor.",
                    "email" : "dictumst@turpis.com",
                    "date" : "20/09/2006"
                },
                {
                    "name" : "Taylor Kinney",
                    "password" : "m+jT2y)4I1D9eK!",
                    "cc" : "4281551274040017",
                    "lorem" : "Nunc consequat interdum varius sit amet mattis vulputate enim.",
                    "email" : "etiam@luctus.com",
                    "date" : "04/05/2011"
                },
                {
                    "name" : "Debra Winger",
                    "password" : "nj/#Zi0}2Np9G7X",
                    "cc" : "4916665341740194",
                    "lorem" : "Fames ac turpis egestas sed tempus urna et.",
                    "email" : "non@odio.com",
                    "date" : "27/09/2006"
                },
                {
                    "name" : "Alyson Stoner",
                    "password" : "|eL4d4*qmG6L_8B",
                    "cc" : "4024007144008561",
                    "lorem" : "Dictumst quisque sagittis purus sit amet volutpat.",
                    "email" : "facilisis@senectus.com",
                    "date" : "20/01/2015"
                },
                {
                    "name" : "Josh Hartnett",
                    "password" : "bkI81E9Egm$:K[2",
                    "cc" : "4916069979182714",
                    "lorem" : "Interdum posuere lorem ipsum dolor.",
                    "email" : "ac@scelerisque.com",
                    "date" : "17/11/2007"
                },
                {
                    "name" : "Milla Jovovich",
                    "password" : "D,654@ofV!d6mSA",
                    "cc" : "4556899707929266",
                    "lorem" : "Venenatis cras sed felis eget velit.",
                    "email" : "accumsan@scelerisque.com",
                    "date" : "01/12/2010"
                },
                {
                    "name" : "Maggie Grace",
                    "password" : "7&1S]d6bB:Cht0A",
                    "cc" : "4556862516912998",
                    "lorem" : "Sit amet dictum sit amet justo donec enim diam.",
                    "email" : "urna@amet.com",
                    "date" : "10/04/2009"
                },
                {
                    "name" : "Tom Hanks",
                    "password" : "_ozF7G&%8Yd15rV",
                    "cc" : "4539101320968579",
                    "lorem" : "Tempus imperdiet nulla malesuada pellentesque elit eget gravida.",
                    "email" : "bibendum@non.com",
                    "date" : "09/05/2005"
                },
                {
                    "name" : "Theo James",
                    "password" : "3*316pZsR&Sqb{M",
                    "cc" : "4716960782406971",
                    "lorem" : "Neque volutpat ac tincidunt vitae semper quis.",
                    "email" : "et@interdum.com",
                    "date" : "04/04/2006"
                },
                {
                    "name" : "Josh Gad",
                    "password" : "-2xwOV4c-(VV6g5",
                    "cc" : "4993538145758645",
                    "lorem" : "Et tortor consequat id porta nibh venenatis cras sed.",
                    "email" : "sed@cursus.com",
                    "date" : "12/08/2015"
                },
                {
                    "name" : "Aidan Gillen",
                    "password" : "8bsM1@K(Wq79)eB",
                    "cc" : "4716867981629610",
                    "lorem" : "Iaculis eu non diam phasellus vestibulum lorem sed risus.",
                    "email" : "lectus@et.com",
                    "date" : "20/08/2010"
                },
                {
                    "name" : "Al Pacino",
                    "password" : "cq}4N&?S7H5Yor8",
                    "cc" : "4716456411660229",
                    "lorem" : "Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam.",
                    "email" : "massa@sem.com",
                    "date" : "16/07/2013"
                },
                {
                    "name" : "Natalie Dormer",
                    "password" : "6Qv(gv3W&GS@61e",
                    "cc" : "4716674188368319",
                    "lorem" : "Turpis tincidunt id aliquet risus feugiat in ante metus dictum.",
                    "email" : "viverra@orci.com",
                    "date" : "15/02/2014"
                },
                {
                    "name" : "Leslie Mann",
                    "password" : "W{B0I7:.Io13ddg",
                    "cc" : "4556816918268888",
                    "lorem" : "Metus aliquam eleifend mi in nulla.",
                    "email" : "lectus@leo.com",
                    "date" : "31/01/2010"
                },
                {
                    "name" : "Lyndsy Fonseca",
                    "password" : "gbP82CR4_6iX[[p",
                    "cc" : "4532206344536075",
                    "lorem" : "Amet nisl purus in.",
                    "email" : "dolor@augue.com",
                    "date" : "08/01/2006"
                },
                {
                    "name" : "Saoirse Ronan",
                    "password" : "0z;YEx9H87Ixv:&",
                    "cc" : "4279600258494502",
                    "lorem" : "Enim lobortis scelerisque fermentum dui faucibus.",
                    "email" : "nibh@libero.com",
                    "date" : "19/11/2010"
                },
                {
                    "name" : "Kate Hudson",
                    "password" : "0Bhd9(4+U3#uRnS",
                    "cc" : "4539021608333454",
                    "lorem" : "Bibendum arcu vitae elementum curabitur vitae nunc sed velit.",
                    "email" : "ultrices@morbi.com",
                    "date" : "12/12/2014"
                },
                {
                    "name" : "Harrison Ford",
                    "password" : "*4s[cJ14_QZJ7jl",
                    "cc" : "4716086943167375",
                    "lorem" : "Nulla facilisi cras fermentum odio eu feugiat pretium nibh.",
                    "email" : "lorem@velit.com",
                    "date" : "24/03/2015"
                },
                {
                    "name" : "James Spader",
                    "password" : "d,c9x(5VmY6L/2L",
                    "cc" : "4609947216020130",
                    "lorem" : "Orci sagittis eu volutpat odio facilisis mauris sit amet.",
                    "email" : "et@in.com",
                    "date" : "02/02/2006"
                },
                {
                    "name" : "Jesse Eisenberg",
                    "password" : "2+9x5H6Cs#LsP_k",
                    "cc" : "4556225972626660",
                    "lorem" : "Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum.",
                    "email" : "nullam@donec.com",
                    "date" : "09/09/2005"
                },
                {
                    "name" : "Ashley Tisdale",
                    "password" : "L.Be84Y8B:yd*4m",
                    "cc" : "4539674010594459",
                    "lorem" : "Dictum sit amet justo.",
                    "email" : "eros@fringilla.com",
                    "date" : "10/05/2009"
                },
                {
                    "name" : "David Tennant",
                    "password" : "6u&M2I4YV;!w1cr",
                    "cc" : "4556021898165606",
                    "lorem" : "Porttitor eget dolor morbi non arcu risus quis varius quam.",
                    "email" : "sed@etiam.com",
                    "date" : "03/04/2008"
                },
                {
                    "name" : "Kit Harington",
                    "password" : "dU}m8O1PU|3}3cv",
                    "cc" : "4532346749389249",
                    "lorem" : "Neque vitae tempus quam.",
                    "email" : "tristique@quisque.com",
                    "date" : "09/05/2006"
                },
                {
                    "name" : "Lea Michele",
                    "password" : "&u49et)GeO:PN45",
                    "cc" : "4575590640985385",
                    "lorem" : "Eget nunc lobortis mattis aliquam faucibus purus in.",
                    "email" : "aenean@sed.com",
                    "date" : "25/06/2013"
                },
                {
                    "name" : "Sofia Coppola",
                    "password" : "O-6qN2bD?z95Hy.",
                    "cc" : "4539299073611808",
                    "lorem" : "Justo nec ultrices dui sapien.",
                    "email" : "in@massa.com",
                    "date" : "14/12/2010"
                },
                {
                    "name" : "Sebastian Stan",
                    "password" : "Kv1O4%bEfH64m(*",
                    "cc" : "4769771495342726",
                    "lorem" : "Sagittis vitae et leo duis ut diam quam nulla.",
                    "email" : "lacus@elementum.com",
                    "date" : "20/11/2014"
                },
                {
                    "name" : "Chris Hemsworth",
                    "password" : "SiU70%H[z92J;ff",
                    "cc" : "4929210368151663",
                    "lorem" : "Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl.",
                    "email" : "eget@bibendum.com",
                    "date" : "10/02/2014"
                },
                {
                    "name" : "Ashlynn Yennie",
                    "password" : "?YTnIix5S]40}8x",
                    "cc" : "4539112686015541",
                    "lorem" : "Sagittis eu volutpat odio facilisis mauris.",
                    "email" : "suspendisse@blandit.com",
                    "date" : "30/03/2005"
                },
                {
                    "name" : "Kat Dennings",
                    "password" : "K7TWpx2$6Fp(#l9",
                    "cc" : "4929974778310736",
                    "lorem" : "Ultrices eros in cursus turpis massa tincidunt dui.",
                    "email" : "diam@ipsum.com",
                    "date" : "20/06/2011"
                },
                {
                    "name" : "Martin Freeman",
                    "password" : "0{321nT,ELIyc;i",
                    "cc" : "4716074187250370",
                    "lorem" : "Pharetra massa massa.",
                    "email" : "scelerisque@turpis.com",
                    "date" : "03/01/2009"
                },
                {
                    "name" : "Charlie Hunnam",
                    "password" : "{gXI9nr?#VG4c41",
                    "cc" : "4485234255825672",
                    "lorem" : "Sed risus pretium quam vulputate dignissim.",
                    "email" : "rhoncus@a.com",
                    "date" : "28/01/2010"
                },
                {
                    "name" : "Cam Gigandet",
                    "password" : "i0D3%5QFzp6pR+}",
                    "cc" : "4716828506160671",
                    "lorem" : "Ut tortor pretium viverra suspendisse potenti nullam ac tortor.",
                    "email" : "faucibus@fames.com",
                    "date" : "17/03/2011"
                },
                {
                    "name" : "Aimee Teegarden",
                    "password" : "sCXlu?370CUh,{0",
                    "cc" : "4532750140226464",
                    "lorem" : "Eget aliquet nibh praesent.",
                    "email" : "vulputate@pellentesque.com",
                    "date" : "14/05/2011"
                },
                {
                    "name" : "Sophia Bush",
                    "password" : "F11Hr1TF=+5w,rq",
                    "cc" : "4532683504255169",
                    "lorem" : "Quam id leo.",
                    "email" : "tortor@egestas.com",
                    "date" : "24/07/2009"
                },
                {
                    "name" : "Emily Osment",
                    "password" : "QngrE7?(JE211#w",
                    "cc" : "4485820958001882",
                    "lorem" : "Sollicitudin aliquam ultrices sagittis orci.",
                    "email" : "eleifend@integer.com",
                    "date" : "08/07/2007"
                },
                {
                    "name" : "Jena Malone",
                    "password" : "r1wp2F*o,FD76D.",
                    "cc" : "4929616694153852",
                    "lorem" : "Aliquam eleifend mi in.",
                    "email" : "pretium@a.com",
                    "date" : "25/09/2009"
                },
                {
                    "name" : "Keri Russell",
                    "password" : "zR#J0u47MBt)0q-",
                    "cc" : "4556250087696408",
                    "lorem" : "Venenatis cras sed felis eget velit aliquet sagittis id.",
                    "email" : "adipiscing@ornare.com",
                    "date" : "29/12/2013"
                },
                {
                    "name" : "Meryl Streep",
                    "password" : "?qVHsO{|893Ny9r",
                    "cc" : "4556055360061901",
                    "lorem" : "Nec feugiat in fermentum.",
                    "email" : "et@eu.com",
                    "date" : "07/06/2012"
                },
                {
                    "name" : "Nicolas Cage",
                    "password" : "nlUi6K/88H;2Iw,",
                    "cc" : "4398431747702230",
                    "lorem" : "Imperdiet sed euismod nisi porta lorem mollis aliquam ut.",
                    "email" : "enim@habitant.com",
                    "date" : "12/11/2006"
                }
            ];

            this.selectedItem = [
            ];

            this.selectedItem.push(this.items[1]);
        }]);
})();
