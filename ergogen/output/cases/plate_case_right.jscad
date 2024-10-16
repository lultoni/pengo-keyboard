function plate_outline_right_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[266,5.25],[279,5.25]]).appendArc([282,8.25],{"radius":3,"clockwise":false,"large":false}).appendPoint([282,48.75]).appendArc([279,51.75],{"radius":3,"clockwise":false,"large":false}).appendPoint([247,51.75]).appendArc([244,54.75],{"radius":3,"clockwise":true,"large":false}).appendPoint([244,57.75]).appendArc([241,60.75],{"radius":3,"clockwise":false,"large":false}).appendPoint([228,60.75]).appendArc([225,63.75],{"radius":3,"clockwise":true,"large":false}).appendPoint([225,64.75]).appendPoint([200,64.75]).appendArc([197,61.75],{"radius":3,"clockwise":false,"large":false}).appendPoint([197,57.75]).appendArc([194,54.75],{"radius":3,"clockwise":true,"large":false}).appendPoint([162,54.75]).appendArc([159,51.75],{"radius":3,"clockwise":false,"large":false}).appendPoint([159,-6.489509]).appendArc([157.2202098,-9.2301454],{"radius":3,"clockwise":true,"large":false}).appendPoint([136.5325911,-18.4408667]).appendArc([135.0121645,-22.401713],{"radius":3,"clockwise":false,"large":false}).appendPoint([143.7570022,-42.0429402]).appendArc([147.7178485,-43.5633668],{"radius":3,"clockwise":false,"large":false}).appendPoint([165.7013945,-35.5565762]).appendArc([166.2978692,-35.3627699],{"radius":3,"clockwise":true,"large":false}).appendPoint([181.8100352,-32.0655572]).appendArc([182.4337703,-32],{"radius":3,"clockwise":true,"large":false}).appendPoint([209,-32]).appendArc([212,-29],{"radius":3,"clockwise":false,"large":false}).appendPoint([212,-3.75]).appendArc([215,-0.75],{"radius":3,"clockwise":true,"large":false}).appendPoint([216,-0.75]).appendPoint([216,-1.75]).appendArc([219,-4.75],{"radius":3,"clockwise":false,"large":false}).appendPoint([232,-4.75]).appendArc([235,-7.75],{"radius":3,"clockwise":true,"large":false}).appendPoint([235,-10.75]).appendArc([238,-13.75],{"radius":3,"clockwise":false,"large":false}).appendPoint([260,-13.75]).appendArc([263,-10.75],{"radius":3,"clockwise":false,"large":false}).appendPoint([263,2.25]).appendArc([266,5.25],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[168.7439091,-27.942049],[182.4379755,-25.0312854]]).appendPoint([179.5272119,-11.337219]).appendPoint([165.8331455,-14.2479826]).appendPoint([168.7439091,-27.942049]).close().innerToCAG()
.union(
    new CSG.Path2D([[148.6265581,-35.7699884],[161.4161945,-30.0756754]]).appendPoint([155.7218815,-17.286039]).appendPoint([142.9322451,-22.980352]).appendPoint([148.6265581,-35.7699884]).close().innerToCAG()
).union(
    new CSG.Path2D([[190,-24],[204,-24]]).appendPoint([204,-10]).appendPoint([190,-10]).appendPoint([190,-24]).close().innerToCAG()
).union(
    new CSG.Path2D([[166,34],[180,34]]).appendPoint([180,48]).appendPoint([166,48]).appendPoint([166,34]).close().innerToCAG()
).union(
    new CSG.Path2D([[166,15],[180,15]]).appendPoint([180,29]).appendPoint([166,29]).appendPoint([166,15]).close().innerToCAG()
).union(
    new CSG.Path2D([[166,-4],[180,-4]]).appendPoint([180,10]).appendPoint([166,10]).appendPoint([166,-4]).close().innerToCAG()
).union(
    new CSG.Path2D([[185,34],[199,34]]).appendPoint([199,48]).appendPoint([185,48]).appendPoint([185,34]).close().innerToCAG()
).union(
    new CSG.Path2D([[185,15],[199,15]]).appendPoint([199,29]).appendPoint([185,29]).appendPoint([185,15]).close().innerToCAG()
).union(
    new CSG.Path2D([[185,-4],[199,-4]]).appendPoint([199,10]).appendPoint([185,10]).appendPoint([185,-4]).close().innerToCAG()
).union(
    new CSG.Path2D([[204,44],[218,44]]).appendPoint([218,58]).appendPoint([204,58]).appendPoint([204,44]).close().innerToCAG()
).union(
    new CSG.Path2D([[204,25],[218,25]]).appendPoint([218,39]).appendPoint([204,39]).appendPoint([204,25]).close().innerToCAG()
).union(
    new CSG.Path2D([[204,6],[218,6]]).appendPoint([218,20]).appendPoint([204,20]).appendPoint([204,6]).close().innerToCAG()
).union(
    new CSG.Path2D([[223,40],[237,40]]).appendPoint([237,54]).appendPoint([223,54]).appendPoint([223,40]).close().innerToCAG()
).union(
    new CSG.Path2D([[223,21],[237,21]]).appendPoint([237,35]).appendPoint([223,35]).appendPoint([223,21]).close().innerToCAG()
).union(
    new CSG.Path2D([[223,2],[237,2]]).appendPoint([237,16]).appendPoint([223,16]).appendPoint([223,2]).close().innerToCAG()
).union(
    new CSG.Path2D([[242,31],[256,31]]).appendPoint([256,45]).appendPoint([242,45]).appendPoint([242,31]).close().innerToCAG()
).union(
    new CSG.Path2D([[242,12],[256,12]]).appendPoint([256,26]).appendPoint([242,26]).appendPoint([242,12]).close().innerToCAG()
).union(
    new CSG.Path2D([[242,-7],[256,-7]]).appendPoint([256,7]).appendPoint([242,7]).appendPoint([242,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[261,31],[275,31]]).appendPoint([275,45]).appendPoint([261,45]).appendPoint([261,31]).close().innerToCAG()
).union(
    new CSG.Path2D([[261,12],[275,12]]).appendPoint([275,26]).appendPoint([261,26]).appendPoint([261,12]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.2] });
}




                function plate_case_right_case_fn() {
                    

                // creating part 0 of case plate_case_right
                let plate_case_right__part_0 = plate_outline_right_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let plate_case_right__part_0_bounds = plate_case_right__part_0.getBounds();
                let plate_case_right__part_0_x = plate_case_right__part_0_bounds[0].x + (plate_case_right__part_0_bounds[1].x - plate_case_right__part_0_bounds[0].x) / 2
                let plate_case_right__part_0_y = plate_case_right__part_0_bounds[0].y + (plate_case_right__part_0_bounds[1].y - plate_case_right__part_0_bounds[0].y) / 2
                plate_case_right__part_0 = translate([-plate_case_right__part_0_x, -plate_case_right__part_0_y, 0], plate_case_right__part_0);
                plate_case_right__part_0 = rotate([0,0,0], plate_case_right__part_0);
                plate_case_right__part_0 = translate([plate_case_right__part_0_x, plate_case_right__part_0_y, 0], plate_case_right__part_0);

                plate_case_right__part_0 = translate([0,0,0], plate_case_right__part_0);
                let result = plate_case_right__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return plate_case_right_case_fn();
            }

        