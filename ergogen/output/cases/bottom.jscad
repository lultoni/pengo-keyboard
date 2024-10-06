function xl_board_left_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[-13,6.25],[6,6.25]]).appendPoint([6,-12.75]).appendPoint([32,-12.75]).appendPoint([32,-3.75]).appendPoint([51,-3.75]).appendPoint([51,0.25]).appendPoint([56,0.25]).appendPoint([56,-32]).appendPoint([90.6912767,-32]).appendPoint([102.3212722,-34.4720319]).appendPoint([122.515979,-43.4632946]).appendPoint([132.8877633,-20.1678855]).appendPoint([109.1355814,-9.5927328]).appendPoint([109.1226928,-9.6216811]).appendPoint([108,-7.3908964]).appendPoint([108,53.75]).appendPoint([70,53.75]).appendPoint([70,63.75]).appendPoint([44,63.75]).appendPoint([44,59.75]).appendPoint([25,59.75]).appendPoint([25,50.75]).appendPoint([-13,50.75]).appendPoint([-13,6.25]).close().innerToCAG()
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

        