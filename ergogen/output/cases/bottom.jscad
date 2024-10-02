function xl_board_left_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[-11,6.25],[4,6.25]]).appendArc([6,4.25],{"radius":2,"clockwise":true,"large":false}).appendPoint([6,-10.75]).appendArc([8,-12.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([30,-12.75]).appendArc([32,-10.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([32,-5.75]).appendArc([34,-3.75],{"radius":2,"clockwise":true,"large":false}).appendPoint([49,-3.75]).appendArc([51,-1.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([51,0.25]).appendPoint([54,0.25]).appendArc([56,-1.75],{"radius":2,"clockwise":true,"large":false}).appendPoint([56,-30]).appendArc([58,-32],{"radius":2,"clockwise":false,"large":false}).appendPoint([90.4810682,-32]).appendArc([90.8968916,-32.0437048],{"radius":2,"clockwise":true,"large":false}).appendPoint([102.1156574,-34.4283271]).appendArc([102.5133072,-34.5575313],{"radius":2,"clockwise":true,"large":false}).appendPoint([120.6888882,-42.6498214]).appendArc([123.3294524,-41.6362036],{"radius":2,"clockwise":false,"large":false}).appendPoint([132.0742901,-21.9949763]).appendArc([131.0606723,-19.3544121],{"radius":2,"clockwise":false,"large":false}).appendPoint([109.1355814,-9.5927328]).appendPoint([109.1226928,-9.6216811]).appendPoint([108.2134904,-7.8151006]).appendArc([108,-6.9159992],{"radius":2,"clockwise":true,"large":false}).appendPoint([108,51.75]).appendArc([106,53.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([72,53.75]).appendArc([70,55.75],{"radius":2,"clockwise":true,"large":false}).appendPoint([70,61.75]).appendArc([68,63.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([46,63.75]).appendArc([44,61.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([44,59.75]).appendPoint([27,59.75]).appendArc([25,57.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([25,52.75]).appendArc([23,50.75],{"radius":2,"clockwise":true,"large":false}).appendPoint([-11,50.75]).appendArc([-13,48.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([-13,8.25]).appendArc([-11,6.25],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
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

        