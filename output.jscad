function main(){
    let base = sphere(5);
    let mouth = cube({size: 10, center: true});
    
    mouth = rotate([0, 45, 0], mouth);
    mouth = translate([8, 0, 0], mouth)
    mouth = scale([1, 1, 0.5], mouth)
    
    let pacmanBody = difference(base, mouth);
    
    let eyeOne = sphere(0.5);
    eyeOne = translate([3, 3, 3,], eyeOne)
    
    let eyeTwo = sphere(0.5);
    eyeTwo = translate([3, -3, 3,], eyeTwo)
    
    pacman = union(pacmanBody, eyeOne, eyeTwo);
    
    let pillOne = sphere(1.8);
    pillOne = translate([10, 0, 0], pillOne)
    
    let pillTwo = sphere(1.8);
    pillTwo = translate([20, 0, 0], pillTwo)
    
    let pillThree = sphere(1.8);
    pillThree = translate([30, 0, 0], pillThree)
    
    let pills = union(pillOne, pillTwo, pillThree);
    
    let top = sphere(4);
    top = translate([40, 0, 0], top)
    
    let jaw = cube({size: 8, center: true});
    jaw = translate([40, 0, -4], jaw)
    
    let head = difference(top, jaw);
    
    let belly = cylinder({r: 4, h: 4});
    belly = translate([50, 0, 0], belly)
    
    let leg1 = cube({size: 8, center: true});
    leg1 = rotate([0, 45, 0], leg1)
    leg1 = translate([48, 0, -3], leg1)
    
    let leg2 = cube({size: 8, center: true});
    leg2 = rotate([0, 45, 0], leg2)
    leg2 = translate([52, 0, -3], leg2)
    
    let legs = union(leg1, leg2)
    
    let body = difference(belly, legs);
    body = translate([-10, 0, -4], body)
    
    let eyeLeft = sphere(1);
    eyeLeft = translate([38, -2.5, 2], eyeLeft)
    
    let eyeRight = sphere(1);
    eyeRight = translate([42, -2.5, 2], eyeRight)
    
    let ghost = union(head, body, eyeLeft, eyeRight)
    
    return [pacman, pills, ghost];
}