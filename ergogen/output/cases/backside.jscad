function full_left_extrude_2_outline_fn(){
    return new CSG.Path2D([[-8.25,8],[4.75,8]]).appendArc([7.75,5],{"radius":3,"clockwise":true,"large":false}).appendPoint([7.75,-8]).appendArc([10.75,-11],{"radius":3,"clockwise":false,"large":false}).appendPoint([27.25,-11]).appendArc([30.25,-8],{"radius":3,"clockwise":false,"large":false}).appendPoint([30.25,-5]).appendArc([33.25,-2],{"radius":3,"clockwise":true,"large":false}).appendPoint([46.25,-2]).appendArc([49.25,1],{"radius":3,"clockwise":false,"large":false}).appendPoint([49.25,2]).appendPoint([61.75,2]).appendArc([64.75,-1],{"radius":3,"clockwise":true,"large":false}).appendPoint([64.75,-3]).appendArc([61.75,-6],{"radius":3,"clockwise":true,"large":false}).appendPoint([59.75,-6]).appendPoint([59.75,-25]).appendArc([62.75,-28],{"radius":3,"clockwise":false,"large":false}).appendPoint([80.5860572,-28]).appendPoint([80.5732504,-28.0602511]).appendPoint([102.5815714,-32.7382641]).appendPoint([102.5943782,-32.678013]).appendPoint([118.8884273,-39.9325911]).appendArc([122.8492735,-38.4121645],{"radius":3,"clockwise":false,"large":false}).appendPoint([129.3570598,-23.7954371]).appendArc([127.8366332,-19.834591],{"radius":3,"clockwise":false,"large":false}).appendPoint([115.7386763,-14.4482335]).appendArc([115.7256379,-14.4423912],{"radius":3,"clockwise":true,"large":false}).appendPoint([110.3930357,-12.0376683]).appendArc([109.4352754,-11.352138],{"radius":3,"clockwise":true,"large":false}).appendPoint([106.3,-8]).appendPoint([106.25,-7.9864365]).appendPoint([106.25,49]).appendArc([103.25,52],{"radius":3,"clockwise":false,"large":false}).appendPoint([71.25,52]).appendArc([68.25,55],{"radius":3,"clockwise":true,"large":false}).appendPoint([68.25,59]).appendArc([65.25,62],{"radius":3,"clockwise":false,"large":false}).appendPoint([48.75,62]).appendArc([45.75,59],{"radius":3,"clockwise":false,"large":false}).appendPoint([45.75,58]).appendPoint([29.75,58]).appendArc([26.75,55],{"radius":3,"clockwise":false,"large":false}).appendPoint([26.75,52]).appendArc([23.75,49],{"radius":3,"clockwise":true,"large":false}).appendPoint([-8.25,49]).appendArc([-11.25,46],{"radius":3,"clockwise":false,"large":false}).appendPoint([-11.25,11]).appendArc([-8.25,8],{"radius":3,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}




                function backside_case_fn() {
                    

                // creating part 0 of case backside
                let backside__part_0 = full_left_extrude_2_outline_fn();

                // make sure that rotations are relative
                let backside__part_0_bounds = backside__part_0.getBounds();
                let backside__part_0_x = backside__part_0_bounds[0].x + (backside__part_0_bounds[1].x - backside__part_0_bounds[0].x) / 2
                let backside__part_0_y = backside__part_0_bounds[0].y + (backside__part_0_bounds[1].y - backside__part_0_bounds[0].y) / 2
                backside__part_0 = translate([-backside__part_0_x, -backside__part_0_y, 0], backside__part_0);
                backside__part_0 = rotate([0,0,0], backside__part_0);
                backside__part_0 = translate([backside__part_0_x, backside__part_0_y, 0], backside__part_0);

                backside__part_0 = translate([0,0,0], backside__part_0);
                let result = backside__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return backside_case_fn();
            }

        