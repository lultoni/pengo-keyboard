function xl_board_left_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[64.3,-28.2],[64.25,4.5]]).appendPoint([106.5,4.5]).appendPoint([107.5041214,-10.781921]).appendPoint([115.3786794,-11.5513618]).appendPoint([111.3110035,-36.6683683]).appendPoint([102.784526,-32.9858716]).appendPoint([91.5358286,-30.5948871]).appendPoint([82.5,-28.2]).appendPoint([64.3,-28.2]).close().innerToCAG()
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

        