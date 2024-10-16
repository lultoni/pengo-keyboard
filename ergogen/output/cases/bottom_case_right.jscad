function xl_board_left_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[-11,5.25],[2,5.25]]).appendArc([5,2.25],{"radius":3,"clockwise":true,"large":false}).appendPoint([5,-10.75]).appendArc([8,-13.75],{"radius":3,"clockwise":false,"large":false}).appendPoint([30,-13.75]).appendArc([33,-10.75],{"radius":3,"clockwise":false,"large":false}).appendPoint([33,-7.75]).appendArc([36,-4.75],{"radius":3,"clockwise":true,"large":false}).appendPoint([49,-4.75]).appendArc([52,-1.75],{"radius":3,"clockwise":false,"large":false}).appendPoint([52,-0.75]).appendPoint([53,-0.75]).appendArc([56,-3.75],{"radius":3,"clockwise":true,"large":false}).appendPoint([56,-29]).appendArc([59,-32],{"radius":3,"clockwise":false,"large":false}).appendPoint([85.5662297,-32]).appendArc([86.1899648,-32.0655572],{"radius":3,"clockwise":true,"large":false}).appendPoint([101.7021308,-35.3627699]).appendArc([102.2986055,-35.5565763],{"radius":3,"clockwise":true,"large":false}).appendPoint([120.2821516,-43.5633668]).appendArc([124.2429977,-42.0429402],{"radius":3,"clockwise":false,"large":false}).appendPoint([132.9878355,-22.4017129]).appendArc([131.4674089,-18.4408668],{"radius":3,"clockwise":false,"large":false}).appendPoint([110.7797902,-9.2301454]).appendArc([109,-6.489509],{"radius":3,"clockwise":true,"large":false}).appendPoint([109,51.75]).appendArc([106,54.75],{"radius":3,"clockwise":false,"large":false}).appendPoint([74,54.75]).appendArc([71,57.75],{"radius":3,"clockwise":true,"large":false}).appendPoint([71,61.75]).appendArc([68,64.75],{"radius":3,"clockwise":false,"large":false}).appendPoint([46,64.75]).appendArc([43,61.75],{"radius":3,"clockwise":false,"large":false}).appendPoint([43,60.75]).appendPoint([27,60.75]).appendArc([24,57.75],{"radius":3,"clockwise":false,"large":false}).appendPoint([24,54.75]).appendArc([21,51.75],{"radius":3,"clockwise":true,"large":false}).appendPoint([-11,51.75]).appendArc([-14,48.75],{"radius":3,"clockwise":false,"large":false}).appendPoint([-14,8.25]).appendArc([-11,5.25],{"radius":3,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1.2] });
}




                function bottom_case_right_case_fn() {
                    

                // creating part 0 of case bottom_case_right
                let bottom_case_right__part_0 = xl_board_left_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let bottom_case_right__part_0_bounds = bottom_case_right__part_0.getBounds();
                let bottom_case_right__part_0_x = bottom_case_right__part_0_bounds[0].x + (bottom_case_right__part_0_bounds[1].x - bottom_case_right__part_0_bounds[0].x) / 2
                let bottom_case_right__part_0_y = bottom_case_right__part_0_bounds[0].y + (bottom_case_right__part_0_bounds[1].y - bottom_case_right__part_0_bounds[0].y) / 2
                bottom_case_right__part_0 = translate([-bottom_case_right__part_0_x, -bottom_case_right__part_0_y, 0], bottom_case_right__part_0);
                bottom_case_right__part_0 = rotate([0,0,0], bottom_case_right__part_0);
                bottom_case_right__part_0 = translate([bottom_case_right__part_0_x, bottom_case_right__part_0_y, 0], bottom_case_right__part_0);

                bottom_case_right__part_0 = translate([0,0,0], bottom_case_right__part_0);
                let result = bottom_case_right__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_right_case_fn();
            }

        