function xl_board_key_cutouts_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[82.25,-8],[84.8371884,-8]]).appendPoint([82.25,-20.1717645]).appendPoint([82.25,-8]).close().innerToCAG()
.union(
    new CSG.Path2D([[64.3,-28.2],[64.2996942,-28]]).appendPoint([80.5860572,-28]).appendPoint([80.5732504,-28.0602511]).appendPoint([81.2307173,-28.2]).appendPoint([64.3,-28.2]).close().innerToCAG()
).union(
    new CSG.Path2D([[111.3275388,-36.5662667],[111.3110035,-36.6683683]]).appendPoint([102.784526,-32.9858716]).appendPoint([91.5358286,-30.5948871]).appendPoint([87.6402248,-29.5623829]).appendPoint([102.5815714,-32.7382641]).appendPoint([102.5943782,-32.678013]).appendPoint([111.3275388,-36.5662667]).close().innerToCAG()
).union(
    new CSG.Path2D([[106.25,4.5],[106.5,4.5]]).appendPoint([107.5041214,-10.781921]).appendPoint([115.3786794,-11.5513618]).appendPoint([114.9652977,-14.1039031]).appendPoint([111.8495877,-12.7166996]).appendArc([109.2090235,-13.7303174],{"radius":2,"clockwise":false,"large":false}).appendPoint([104.258321,-24.8497773]).appendPoint([106.7398052,-13.1753121]).appendArc([105.1993334,-10.8031935],{"radius":2,"clockwise":false,"large":false}).appendPoint([92.0113446,-8]).appendPoint([104.25,-8]).appendArc([106.25,-6],{"radius":2,"clockwise":false,"large":false}).appendPoint([106.25,4.5]).close().innerToCAG()
).extrude({ offset: [0, 0, 1.2] });
}




                function switchplate_case_fn() {
                    

                // creating part 0 of case switchplate
                let switchplate__part_0 = xl_board_key_cutouts_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let switchplate__part_0_bounds = switchplate__part_0.getBounds();
                let switchplate__part_0_x = switchplate__part_0_bounds[0].x + (switchplate__part_0_bounds[1].x - switchplate__part_0_bounds[0].x) / 2
                let switchplate__part_0_y = switchplate__part_0_bounds[0].y + (switchplate__part_0_bounds[1].y - switchplate__part_0_bounds[0].y) / 2
                switchplate__part_0 = translate([-switchplate__part_0_x, -switchplate__part_0_y, 0], switchplate__part_0);
                switchplate__part_0 = rotate([0,0,0], switchplate__part_0);
                switchplate__part_0 = translate([switchplate__part_0_x, switchplate__part_0_y, 0], switchplate__part_0);

                switchplate__part_0 = translate([0,0,0], switchplate__part_0);
                let result = switchplate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return switchplate_case_fn();
            }

        