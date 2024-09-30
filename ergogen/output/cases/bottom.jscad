function xl_board_left_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[-10.25,6],[2.75,6]]).appendArc([5.75,3],{"radius":3,"clockwise":true,"large":false}).appendPoint([5.75,-10]).appendArc([8.75,-13],{"radius":3,"clockwise":false,"large":false}).appendPoint([29.25,-13]).appendArc([32.25,-10],{"radius":3,"clockwise":false,"large":false}).appendPoint([32.25,-7]).appendArc([35.25,-4],{"radius":3,"clockwise":true,"large":false}).appendPoint([48.25,-4]).appendArc([51.25,-1],{"radius":3,"clockwise":false,"large":false}).appendPoint([51.25,0]).appendPoint([59.75,0]).appendArc([62.75,-3],{"radius":3,"clockwise":true,"large":false}).appendPoint([62.75,-4]).appendPoint([60.75,-4]).appendArc([57.75,-7],{"radius":3,"clockwise":false,"large":false}).appendPoint([57.75,-27]).appendArc([60.75,-30],{"radius":3,"clockwise":false,"large":false}).appendPoint([79.7642701,-30]).appendArc([80.3880052,-30.0655572],{"radius":3,"clockwise":true,"large":false}).appendPoint([101.9351699,-34.6455484]).appendArc([102.5316446,-34.8393548],{"radius":3,"clockwise":true,"large":false}).appendPoint([119.902045,-42.5731553]).appendArc([123.8628911,-41.0527287],{"radius":3,"clockwise":false,"large":false}).appendPoint([131.997624,-22.7818195]).appendArc([130.4771974,-18.8209733],{"radius":3,"clockwise":false,"large":false}).appendPoint([109.0088792,-9.2626622]).appendPoint([108.8845829,-9.5418363]).appendPoint([108.25,-9.4069515]).appendPoint([108.25,51]).appendArc([105.25,54],{"radius":3,"clockwise":false,"large":false}).appendPoint([73.25,54]).appendArc([70.25,57],{"radius":3,"clockwise":true,"large":false}).appendPoint([70.25,61]).appendArc([67.25,64],{"radius":3,"clockwise":false,"large":false}).appendPoint([46.75,64]).appendArc([43.75,61],{"radius":3,"clockwise":false,"large":false}).appendPoint([43.75,60]).appendPoint([27.75,60]).appendArc([24.75,57],{"radius":3,"clockwise":false,"large":false}).appendPoint([24.75,54]).appendArc([21.75,51],{"radius":3,"clockwise":true,"large":false}).appendPoint([-10.25,51]).appendArc([-13.25,48],{"radius":3,"clockwise":false,"large":false}).appendPoint([-13.25,9]).appendArc([-10.25,6],{"radius":3,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1.2] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = xl_board_left_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_fn();
            }

        