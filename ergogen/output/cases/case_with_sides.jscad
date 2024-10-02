function full_left_extrude_2_outline_fn(){
    return new CSG.Path2D([[-8.25,8],[4.75,8]]).appendArc([7.75,5],{"radius":3,"clockwise":true,"large":false}).appendPoint([7.75,-8]).appendArc([10.75,-11],{"radius":3,"clockwise":false,"large":false}).appendPoint([27.25,-11]).appendArc([30.25,-8],{"radius":3,"clockwise":false,"large":false}).appendPoint([30.25,-5]).appendArc([33.25,-2],{"radius":3,"clockwise":true,"large":false}).appendPoint([46.25,-2]).appendArc([49.25,1],{"radius":3,"clockwise":false,"large":false}).appendPoint([49.25,2]).appendPoint([61.75,2]).appendArc([64.75,-1],{"radius":3,"clockwise":true,"large":false}).appendPoint([64.75,-3]).appendArc([61.75,-6],{"radius":3,"clockwise":true,"large":false}).appendPoint([59.75,-6]).appendPoint([59.75,-25]).appendArc([62.75,-28],{"radius":3,"clockwise":false,"large":false}).appendPoint([80.5860572,-28]).appendPoint([80.5732504,-28.0602511]).appendPoint([102.5815714,-32.7382641]).appendPoint([102.5943782,-32.678013]).appendPoint([118.8884273,-39.9325911]).appendArc([122.8492735,-38.4121645],{"radius":3,"clockwise":false,"large":false}).appendPoint([129.3570598,-23.7954371]).appendArc([127.8366332,-19.834591],{"radius":3,"clockwise":false,"large":false}).appendPoint([115.7386763,-14.4482335]).appendArc([115.7256379,-14.4423912],{"radius":3,"clockwise":true,"large":false}).appendPoint([110.3930357,-12.0376683]).appendArc([109.4352754,-11.352138],{"radius":3,"clockwise":true,"large":false}).appendPoint([106.3,-8]).appendPoint([106.25,-7.9864365]).appendPoint([106.25,49]).appendArc([103.25,52],{"radius":3,"clockwise":false,"large":false}).appendPoint([71.25,52]).appendArc([68.25,55],{"radius":3,"clockwise":true,"large":false}).appendPoint([68.25,59]).appendArc([65.25,62],{"radius":3,"clockwise":false,"large":false}).appendPoint([48.75,62]).appendArc([45.75,59],{"radius":3,"clockwise":false,"large":false}).appendPoint([45.75,58]).appendPoint([29.75,58]).appendArc([26.75,55],{"radius":3,"clockwise":false,"large":false}).appendPoint([26.75,52]).appendArc([23.75,49],{"radius":3,"clockwise":true,"large":false}).appendPoint([-8.25,49]).appendArc([-11.25,46],{"radius":3,"clockwise":false,"large":false}).appendPoint([-11.25,11]).appendArc([-8.25,8],{"radius":3,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}


function case_outline_left_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[-11,6.25],[4,6.25]]).appendArc([6,4.25],{"radius":2,"clockwise":true,"large":false}).appendPoint([6,-10.75]).appendArc([8,-12.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([30,-12.75]).appendArc([32,-10.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([32,-5.75]).appendArc([34,-3.75],{"radius":2,"clockwise":true,"large":false}).appendPoint([49,-3.75]).appendArc([51,-1.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([51,0.25]).appendPoint([54,0.25]).appendArc([56,-1.75],{"radius":2,"clockwise":true,"large":false}).appendPoint([56,-30]).appendArc([58,-32],{"radius":2,"clockwise":false,"large":false}).appendPoint([90.4810682,-32]).appendArc([90.8968916,-32.0437048],{"radius":2,"clockwise":true,"large":false}).appendPoint([102.1156574,-34.4283271]).appendArc([102.5133072,-34.5575313],{"radius":2,"clockwise":true,"large":false}).appendPoint([120.6888882,-42.6498214]).appendArc([123.3294524,-41.6362036],{"radius":2,"clockwise":false,"large":false}).appendPoint([132.0742901,-21.9949763]).appendArc([131.0606723,-19.3544121],{"radius":2,"clockwise":false,"large":false}).appendPoint([109.1355814,-9.5927328]).appendPoint([109.1226928,-9.6216811]).appendPoint([108.2134904,-7.8151006]).appendArc([108,-6.9159992],{"radius":2,"clockwise":true,"large":false}).appendPoint([108,51.75]).appendArc([106,53.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([72,53.75]).appendArc([70,55.75],{"radius":2,"clockwise":true,"large":false}).appendPoint([70,61.75]).appendArc([68,63.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([46,63.75]).appendArc([44,61.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([44,59.75]).appendPoint([27,59.75]).appendArc([25,57.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([25,52.75]).appendArc([23,50.75],{"radius":2,"clockwise":true,"large":false}).appendPoint([-11,50.75]).appendArc([-13,48.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([-13,8.25]).appendArc([-11,6.25],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
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




                function case_with_sides_case_fn() {
                    

                // creating part 0 of case case_with_sides
                let case_with_sides__part_0 = full_left_extrude_2_outline_fn();

                // make sure that rotations are relative
                let case_with_sides__part_0_bounds = case_with_sides__part_0.getBounds();
                let case_with_sides__part_0_x = case_with_sides__part_0_bounds[0].x + (case_with_sides__part_0_bounds[1].x - case_with_sides__part_0_bounds[0].x) / 2
                let case_with_sides__part_0_y = case_with_sides__part_0_bounds[0].y + (case_with_sides__part_0_bounds[1].y - case_with_sides__part_0_bounds[0].y) / 2
                case_with_sides__part_0 = translate([-case_with_sides__part_0_x, -case_with_sides__part_0_y, 0], case_with_sides__part_0);
                case_with_sides__part_0 = rotate([0,0,0], case_with_sides__part_0);
                case_with_sides__part_0 = translate([case_with_sides__part_0_x, case_with_sides__part_0_y, 0], case_with_sides__part_0);

                case_with_sides__part_0 = translate([0,0,0], case_with_sides__part_0);
                let result = case_with_sides__part_0;
                
            

                // creating part 1 of case case_with_sides
                let case_with_sides__part_1 = case_outline_left_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let case_with_sides__part_1_bounds = case_with_sides__part_1.getBounds();
                let case_with_sides__part_1_x = case_with_sides__part_1_bounds[0].x + (case_with_sides__part_1_bounds[1].x - case_with_sides__part_1_bounds[0].x) / 2
                let case_with_sides__part_1_y = case_with_sides__part_1_bounds[0].y + (case_with_sides__part_1_bounds[1].y - case_with_sides__part_1_bounds[0].y) / 2
                case_with_sides__part_1 = translate([-case_with_sides__part_1_x, -case_with_sides__part_1_y, 0], case_with_sides__part_1);
                case_with_sides__part_1 = rotate([0,0,0], case_with_sides__part_1);
                case_with_sides__part_1 = translate([case_with_sides__part_1_x, case_with_sides__part_1_y, 0], case_with_sides__part_1);

                case_with_sides__part_1 = translate([0,0,0], case_with_sides__part_1);
                result = result.subtract(case_with_sides__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_with_sides_case_fn();
            }

        