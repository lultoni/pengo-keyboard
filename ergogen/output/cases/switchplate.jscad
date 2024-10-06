function case_outline_left_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[-13,6.25],[6,6.25]]).appendPoint([6,-12.75]).appendPoint([32,-12.75]).appendPoint([32,-3.75]).appendPoint([51,-3.75]).appendPoint([51,0.25]).appendPoint([56,0.25]).appendPoint([56,-32]).appendPoint([90.6912767,-32]).appendPoint([102.3212722,-34.4720319]).appendPoint([122.515979,-43.4632946]).appendPoint([132.8877633,-20.1678855]).appendPoint([109.1355814,-9.5927328]).appendPoint([109.1226928,-9.6216811]).appendPoint([108,-7.3908964]).appendPoint([108,53.75]).appendPoint([70,53.75]).appendPoint([70,63.75]).appendPoint([44,63.75]).appendPoint([44,59.75]).appendPoint([25,59.75]).appendPoint([25,50.75]).appendPoint([-13,50.75]).appendPoint([-13,6.25]).close().innerToCAG()
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




                function switchplate_case_fn() {
                    

                // creating part 0 of case switchplate
                let switchplate__part_0 = case_outline_left_extrude_1_2_outline_fn();

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

        