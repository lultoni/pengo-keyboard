function plate_outline_left_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[-11,5.25],[2,5.25]]).appendArc([5,2.25],{"radius":3,"clockwise":true,"large":false}).appendPoint([5,-10.75]).appendArc([8,-13.75],{"radius":3,"clockwise":false,"large":false}).appendPoint([30,-13.75]).appendArc([33,-10.75],{"radius":3,"clockwise":false,"large":false}).appendPoint([33,-7.75]).appendArc([36,-4.75],{"radius":3,"clockwise":true,"large":false}).appendPoint([49,-4.75]).appendArc([52,-1.75],{"radius":3,"clockwise":false,"large":false}).appendPoint([52,-0.75]).appendPoint([53,-0.75]).appendArc([56,-3.75],{"radius":3,"clockwise":true,"large":false}).appendPoint([56,-29]).appendArc([59,-32],{"radius":3,"clockwise":false,"large":false}).appendPoint([85.5662297,-32]).appendArc([86.1899648,-32.0655572],{"radius":3,"clockwise":true,"large":false}).appendPoint([101.7021308,-35.3627699]).appendArc([102.2986055,-35.5565763],{"radius":3,"clockwise":true,"large":false}).appendPoint([120.2821516,-43.5633668]).appendArc([124.2429977,-42.0429402],{"radius":3,"clockwise":false,"large":false}).appendPoint([132.9878355,-22.4017129]).appendArc([131.4674089,-18.4408668],{"radius":3,"clockwise":false,"large":false}).appendPoint([110.7797902,-9.2301454]).appendArc([109,-6.489509],{"radius":3,"clockwise":true,"large":false}).appendPoint([109,51.75]).appendArc([106,54.75],{"radius":3,"clockwise":false,"large":false}).appendPoint([74,54.75]).appendArc([71,57.75],{"radius":3,"clockwise":true,"large":false}).appendPoint([71,61.75]).appendArc([68,64.75],{"radius":3,"clockwise":false,"large":false}).appendPoint([46,64.75]).appendArc([43,61.75],{"radius":3,"clockwise":false,"large":false}).appendPoint([43,60.75]).appendPoint([27,60.75]).appendArc([24,57.75],{"radius":3,"clockwise":false,"large":false}).appendPoint([24,54.75]).appendArc([21,51.75],{"radius":3,"clockwise":true,"large":false}).appendPoint([-11,51.75]).appendArc([-14,48.75],{"radius":3,"clockwise":false,"large":false}).appendPoint([-14,8.25]).appendArc([-11,5.25],{"radius":3,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[85.5620245,-25.0312854],[99.2560909,-27.942049]]).appendPoint([102.1668545,-14.2479826]).appendPoint([88.4727881,-11.337219]).appendPoint([85.5620245,-25.0312854]).close().innerToCAG()
.union(
    new CSG.Path2D([[106.5838055,-30.0756754],[119.3734419,-35.7699884]]).appendPoint([125.0677549,-22.980352]).appendPoint([112.2781185,-17.286039]).appendPoint([106.5838055,-30.0756754]).close().innerToCAG()
).union(
    new CSG.Path2D([[64,-24],[78,-24]]).appendPoint([78,-10]).appendPoint([64,-10]).appendPoint([64,-24]).close().innerToCAG()
).union(
    new CSG.Path2D([[88,34],[102,34]]).appendPoint([102,48]).appendPoint([88,48]).appendPoint([88,34]).close().innerToCAG()
).union(
    new CSG.Path2D([[88,15],[102,15]]).appendPoint([102,29]).appendPoint([88,29]).appendPoint([88,15]).close().innerToCAG()
).union(
    new CSG.Path2D([[88,-4],[102,-4]]).appendPoint([102,10]).appendPoint([88,10]).appendPoint([88,-4]).close().innerToCAG()
).union(
    new CSG.Path2D([[69,34],[83,34]]).appendPoint([83,48]).appendPoint([69,48]).appendPoint([69,34]).close().innerToCAG()
).union(
    new CSG.Path2D([[69,15],[83,15]]).appendPoint([83,29]).appendPoint([69,29]).appendPoint([69,15]).close().innerToCAG()
).union(
    new CSG.Path2D([[69,-4],[83,-4]]).appendPoint([83,10]).appendPoint([69,10]).appendPoint([69,-4]).close().innerToCAG()
).union(
    new CSG.Path2D([[50,44],[64,44]]).appendPoint([64,58]).appendPoint([50,58]).appendPoint([50,44]).close().innerToCAG()
).union(
    new CSG.Path2D([[50,25],[64,25]]).appendPoint([64,39]).appendPoint([50,39]).appendPoint([50,25]).close().innerToCAG()
).union(
    new CSG.Path2D([[50,6],[64,6]]).appendPoint([64,20]).appendPoint([50,20]).appendPoint([50,6]).close().innerToCAG()
).union(
    new CSG.Path2D([[31,40],[45,40]]).appendPoint([45,54]).appendPoint([31,54]).appendPoint([31,40]).close().innerToCAG()
).union(
    new CSG.Path2D([[31,21],[45,21]]).appendPoint([45,35]).appendPoint([31,35]).appendPoint([31,21]).close().innerToCAG()
).union(
    new CSG.Path2D([[31,2],[45,2]]).appendPoint([45,16]).appendPoint([31,16]).appendPoint([31,2]).close().innerToCAG()
).union(
    new CSG.Path2D([[12,31],[26,31]]).appendPoint([26,45]).appendPoint([12,45]).appendPoint([12,31]).close().innerToCAG()
).union(
    new CSG.Path2D([[12,12],[26,12]]).appendPoint([26,26]).appendPoint([12,26]).appendPoint([12,12]).close().innerToCAG()
).union(
    new CSG.Path2D([[12,-7],[26,-7]]).appendPoint([26,7]).appendPoint([12,7]).appendPoint([12,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7,31],[7,31]]).appendPoint([7,45]).appendPoint([-7,45]).appendPoint([-7,31]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7,12],[7,12]]).appendPoint([7,26]).appendPoint([-7,26]).appendPoint([-7,12]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.2] });
}




                function plate_case_left_case_fn() {
                    

                // creating part 0 of case plate_case_left
                let plate_case_left__part_0 = plate_outline_left_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let plate_case_left__part_0_bounds = plate_case_left__part_0.getBounds();
                let plate_case_left__part_0_x = plate_case_left__part_0_bounds[0].x + (plate_case_left__part_0_bounds[1].x - plate_case_left__part_0_bounds[0].x) / 2
                let plate_case_left__part_0_y = plate_case_left__part_0_bounds[0].y + (plate_case_left__part_0_bounds[1].y - plate_case_left__part_0_bounds[0].y) / 2
                plate_case_left__part_0 = translate([-plate_case_left__part_0_x, -plate_case_left__part_0_y, 0], plate_case_left__part_0);
                plate_case_left__part_0 = rotate([0,0,0], plate_case_left__part_0);
                plate_case_left__part_0 = translate([plate_case_left__part_0_x, plate_case_left__part_0_y, 0], plate_case_left__part_0);

                plate_case_left__part_0 = translate([0,0,0], plate_case_left__part_0);
                let result = plate_case_left__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return plate_case_left_case_fn();
            }

        