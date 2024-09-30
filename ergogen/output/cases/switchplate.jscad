function case_outline_left_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[-10.25,6],[2.75,6]]).appendArc([5.75,3],{"radius":3,"clockwise":true,"large":false}).appendPoint([5.75,-10]).appendArc([8.75,-13],{"radius":3,"clockwise":false,"large":false}).appendPoint([29.25,-13]).appendArc([32.25,-10],{"radius":3,"clockwise":false,"large":false}).appendPoint([32.25,-7]).appendArc([35.25,-4],{"radius":3,"clockwise":true,"large":false}).appendPoint([48.25,-4]).appendArc([51.25,-1],{"radius":3,"clockwise":false,"large":false}).appendPoint([51.25,0]).appendPoint([59.75,0]).appendArc([62.75,-3],{"radius":3,"clockwise":true,"large":false}).appendPoint([62.75,-4]).appendPoint([60.75,-4]).appendArc([57.75,-7],{"radius":3,"clockwise":false,"large":false}).appendPoint([57.75,-27]).appendArc([60.75,-30],{"radius":3,"clockwise":false,"large":false}).appendPoint([79.7642701,-30]).appendArc([80.3880052,-30.0655572],{"radius":3,"clockwise":true,"large":false}).appendPoint([101.9351699,-34.6455484]).appendArc([102.5316446,-34.8393548],{"radius":3,"clockwise":true,"large":false}).appendPoint([119.902045,-42.5731553]).appendArc([123.8628911,-41.0527287],{"radius":3,"clockwise":false,"large":false}).appendPoint([131.997624,-22.7818195]).appendArc([130.4771974,-18.8209733],{"radius":3,"clockwise":false,"large":false}).appendPoint([109.0088792,-9.2626622]).appendPoint([108.8845829,-9.5418363]).appendPoint([108.25,-9.4069515]).appendPoint([108.25,51]).appendArc([105.25,54],{"radius":3,"clockwise":false,"large":false}).appendPoint([73.25,54]).appendArc([70.25,57],{"radius":3,"clockwise":true,"large":false}).appendPoint([70.25,61]).appendArc([67.25,64],{"radius":3,"clockwise":false,"large":false}).appendPoint([46.75,64]).appendArc([43.75,61],{"radius":3,"clockwise":false,"large":false}).appendPoint([43.75,60]).appendPoint([27.75,60]).appendArc([24.75,57],{"radius":3,"clockwise":false,"large":false}).appendPoint([24.75,54]).appendArc([21.75,51],{"radius":3,"clockwise":true,"large":false}).appendPoint([-10.25,51]).appendArc([-13.25,48],{"radius":3,"clockwise":false,"large":false}).appendPoint([-13.25,9]).appendArc([-10.25,6],{"radius":3,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[107.497351,-30.4824121],[118.4598965,-35.3632518]]).appendArc([119.7801786,-34.8564429],{"radius":1,"clockwise":false,"large":false}).appendPoint([124.6610183,-23.8938974]).appendArc([124.1542094,-22.5736153],{"radius":1,"clockwise":false,"large":false}).appendPoint([113.1916639,-17.6927756]).appendArc([111.8713818,-18.1995845],{"radius":1,"clockwise":false,"large":false}).appendPoint([106.9905421,-29.16213]).appendArc([107.497351,-30.4824121],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.union(
    new CSG.Path2D([[86.5401721,-25.2391971],[98.2779433,-27.7341373]]).appendArc([99.4640026,-26.9639014],{"radius":1,"clockwise":false,"large":false}).appendPoint([101.9589428,-15.2261302]).appendArc([101.1887069,-14.0400709],{"radius":1,"clockwise":false,"large":false}).appendPoint([89.4509357,-11.5451307]).appendArc([88.2648764,-12.3153666],{"radius":1,"clockwise":false,"large":false}).appendPoint([85.7699362,-24.0531378]).appendArc([86.5401721,-25.2391971],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[65,-24],[77,-24]]).appendArc([78,-23],{"radius":1,"clockwise":false,"large":false}).appendPoint([78,-11]).appendArc([77,-10],{"radius":1,"clockwise":false,"large":false}).appendPoint([65,-10]).appendArc([64,-11],{"radius":1,"clockwise":false,"large":false}).appendPoint([64,-23]).appendArc([65,-24],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[89,34],[101,34]]).appendArc([102,35],{"radius":1,"clockwise":false,"large":false}).appendPoint([102,47]).appendArc([101,48],{"radius":1,"clockwise":false,"large":false}).appendPoint([89,48]).appendArc([88,47],{"radius":1,"clockwise":false,"large":false}).appendPoint([88,35]).appendArc([89,34],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[89,15],[101,15]]).appendArc([102,16],{"radius":1,"clockwise":false,"large":false}).appendPoint([102,28]).appendArc([101,29],{"radius":1,"clockwise":false,"large":false}).appendPoint([89,29]).appendArc([88,28],{"radius":1,"clockwise":false,"large":false}).appendPoint([88,16]).appendArc([89,15],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[89,-4],[101,-4]]).appendArc([102,-3],{"radius":1,"clockwise":false,"large":false}).appendPoint([102,9]).appendArc([101,10],{"radius":1,"clockwise":false,"large":false}).appendPoint([89,10]).appendArc([88,9],{"radius":1,"clockwise":false,"large":false}).appendPoint([88,-3]).appendArc([89,-4],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[70,34],[82,34]]).appendArc([83,35],{"radius":1,"clockwise":false,"large":false}).appendPoint([83,47]).appendArc([82,48],{"radius":1,"clockwise":false,"large":false}).appendPoint([70,48]).appendArc([69,47],{"radius":1,"clockwise":false,"large":false}).appendPoint([69,35]).appendArc([70,34],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[70,15],[82,15]]).appendArc([83,16],{"radius":1,"clockwise":false,"large":false}).appendPoint([83,28]).appendArc([82,29],{"radius":1,"clockwise":false,"large":false}).appendPoint([70,29]).appendArc([69,28],{"radius":1,"clockwise":false,"large":false}).appendPoint([69,16]).appendArc([70,15],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[70,-4],[82,-4]]).appendArc([83,-3],{"radius":1,"clockwise":false,"large":false}).appendPoint([83,9]).appendArc([82,10],{"radius":1,"clockwise":false,"large":false}).appendPoint([70,10]).appendArc([69,9],{"radius":1,"clockwise":false,"large":false}).appendPoint([69,-3]).appendArc([70,-4],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[51,44],[63,44]]).appendArc([64,45],{"radius":1,"clockwise":false,"large":false}).appendPoint([64,57]).appendArc([63,58],{"radius":1,"clockwise":false,"large":false}).appendPoint([51,58]).appendArc([50,57],{"radius":1,"clockwise":false,"large":false}).appendPoint([50,45]).appendArc([51,44],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[51,25],[63,25]]).appendArc([64,26],{"radius":1,"clockwise":false,"large":false}).appendPoint([64,38]).appendArc([63,39],{"radius":1,"clockwise":false,"large":false}).appendPoint([51,39]).appendArc([50,38],{"radius":1,"clockwise":false,"large":false}).appendPoint([50,26]).appendArc([51,25],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[51,6],[63,6]]).appendArc([64,7],{"radius":1,"clockwise":false,"large":false}).appendPoint([64,19]).appendArc([63,20],{"radius":1,"clockwise":false,"large":false}).appendPoint([51,20]).appendArc([50,19],{"radius":1,"clockwise":false,"large":false}).appendPoint([50,7]).appendArc([51,6],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[32,40],[44,40]]).appendArc([45,41],{"radius":1,"clockwise":false,"large":false}).appendPoint([45,53]).appendArc([44,54],{"radius":1,"clockwise":false,"large":false}).appendPoint([32,54]).appendArc([31,53],{"radius":1,"clockwise":false,"large":false}).appendPoint([31,41]).appendArc([32,40],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[32,21],[44,21]]).appendArc([45,22],{"radius":1,"clockwise":false,"large":false}).appendPoint([45,34]).appendArc([44,35],{"radius":1,"clockwise":false,"large":false}).appendPoint([32,35]).appendArc([31,34],{"radius":1,"clockwise":false,"large":false}).appendPoint([31,22]).appendArc([32,21],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[32,2],[44,2]]).appendArc([45,3],{"radius":1,"clockwise":false,"large":false}).appendPoint([45,15]).appendArc([44,16],{"radius":1,"clockwise":false,"large":false}).appendPoint([32,16]).appendArc([31,15],{"radius":1,"clockwise":false,"large":false}).appendPoint([31,3]).appendArc([32,2],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[13,31],[25,31]]).appendArc([26,32],{"radius":1,"clockwise":false,"large":false}).appendPoint([26,44]).appendArc([25,45],{"radius":1,"clockwise":false,"large":false}).appendPoint([13,45]).appendArc([12,44],{"radius":1,"clockwise":false,"large":false}).appendPoint([12,32]).appendArc([13,31],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[13,12],[25,12]]).appendArc([26,13],{"radius":1,"clockwise":false,"large":false}).appendPoint([26,25]).appendArc([25,26],{"radius":1,"clockwise":false,"large":false}).appendPoint([13,26]).appendArc([12,25],{"radius":1,"clockwise":false,"large":false}).appendPoint([12,13]).appendArc([13,12],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[13,-7],[25,-7]]).appendArc([26,-6],{"radius":1,"clockwise":false,"large":false}).appendPoint([26,6]).appendArc([25,7],{"radius":1,"clockwise":false,"large":false}).appendPoint([13,7]).appendArc([12,6],{"radius":1,"clockwise":false,"large":false}).appendPoint([12,-6]).appendArc([13,-7],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[-6,31],[6,31]]).appendArc([7,32],{"radius":1,"clockwise":false,"large":false}).appendPoint([7,44]).appendArc([6,45],{"radius":1,"clockwise":false,"large":false}).appendPoint([-6,45]).appendArc([-7,44],{"radius":1,"clockwise":false,"large":false}).appendPoint([-7,32]).appendArc([-6,31],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[-6,12],[6,12]]).appendArc([7,13],{"radius":1,"clockwise":false,"large":false}).appendPoint([7,25]).appendArc([6,26],{"radius":1,"clockwise":false,"large":false}).appendPoint([-6,26]).appendArc([-7,25],{"radius":1,"clockwise":false,"large":false}).appendPoint([-7,13]).appendArc([-6,12],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
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

        