function xl_board_right_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[266,5.25],[279,5.25]]).appendArc([282,8.25],{"radius":3,"clockwise":false,"large":false}).appendPoint([282,48.75]).appendArc([279,51.75],{"radius":3,"clockwise":false,"large":false}).appendPoint([247,51.75]).appendArc([244,54.75],{"radius":3,"clockwise":true,"large":false}).appendPoint([244,57.75]).appendArc([241,60.75],{"radius":3,"clockwise":false,"large":false}).appendPoint([228,60.75]).appendArc([225,63.75],{"radius":3,"clockwise":true,"large":false}).appendPoint([225,64.75]).appendPoint([200,64.75]).appendArc([197,61.75],{"radius":3,"clockwise":false,"large":false}).appendPoint([197,57.75]).appendArc([194,54.75],{"radius":3,"clockwise":true,"large":false}).appendPoint([162,54.75]).appendArc([159,51.75],{"radius":3,"clockwise":false,"large":false}).appendPoint([159,-6.489509]).appendArc([157.2202098,-9.2301454],{"radius":3,"clockwise":true,"large":false}).appendPoint([136.5325911,-18.4408667]).appendArc([135.0121645,-22.401713],{"radius":3,"clockwise":false,"large":false}).appendPoint([143.7570022,-42.0429402]).appendArc([147.7178485,-43.5633668],{"radius":3,"clockwise":false,"large":false}).appendPoint([165.7013945,-35.5565762]).appendArc([166.2978692,-35.3627699],{"radius":3,"clockwise":true,"large":false}).appendPoint([181.8100352,-32.0655572]).appendArc([182.4337703,-32],{"radius":3,"clockwise":true,"large":false}).appendPoint([209,-32]).appendArc([212,-29],{"radius":3,"clockwise":false,"large":false}).appendPoint([212,-3.75]).appendArc([215,-0.75],{"radius":3,"clockwise":true,"large":false}).appendPoint([216,-0.75]).appendPoint([216,-1.75]).appendArc([219,-4.75],{"radius":3,"clockwise":false,"large":false}).appendPoint([232,-4.75]).appendArc([235,-7.75],{"radius":3,"clockwise":true,"large":false}).appendPoint([235,-10.75]).appendArc([238,-13.75],{"radius":3,"clockwise":false,"large":false}).appendPoint([260,-13.75]).appendArc([263,-10.75],{"radius":3,"clockwise":false,"large":false}).appendPoint([263,2.25]).appendArc([266,5.25],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1.2] });
}




                function bottom_case_left_case_fn() {
                    

                // creating part 0 of case bottom_case_left
                let bottom_case_left__part_0 = xl_board_right_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let bottom_case_left__part_0_bounds = bottom_case_left__part_0.getBounds();
                let bottom_case_left__part_0_x = bottom_case_left__part_0_bounds[0].x + (bottom_case_left__part_0_bounds[1].x - bottom_case_left__part_0_bounds[0].x) / 2
                let bottom_case_left__part_0_y = bottom_case_left__part_0_bounds[0].y + (bottom_case_left__part_0_bounds[1].y - bottom_case_left__part_0_bounds[0].y) / 2
                bottom_case_left__part_0 = translate([-bottom_case_left__part_0_x, -bottom_case_left__part_0_y, 0], bottom_case_left__part_0);
                bottom_case_left__part_0 = rotate([0,0,0], bottom_case_left__part_0);
                bottom_case_left__part_0 = translate([bottom_case_left__part_0_x, bottom_case_left__part_0_y, 0], bottom_case_left__part_0);

                bottom_case_left__part_0 = translate([0,0,0], bottom_case_left__part_0);
                let result = bottom_case_left__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_left_case_fn();
            }

        