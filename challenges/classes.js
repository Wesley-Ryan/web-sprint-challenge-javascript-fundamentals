// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:


class CuboidMaker2 { 
    constructor (attributes) { 
        this.length = attributes.length
        this.width = attributes.width
        this.height = attributes.height
      }

      volume() { 
        return this.length * this.height * this.width
      }
      surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
      }
}



  const cuboid2 = new CuboidMaker2 ({ 
    length: 4, 
    width: 5, 
    height: 5
  })


console.log("From my Classes:",cuboid2.volume()); // 100
console.log("From my Classes:",cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMakerNew extends CuboidMaker2 { 
    constructor(attributes) { 
        super(attributes)
    
    }

    volume() { 
        let volume = this.length //since cubes are equal take one side to the power of 3. 
        return Math.pow(volume,3) //returns volume to the power of 3 
    }

    surfaceArea() { 
        let surface = Math.pow(this.length, 2) //create a side  
        return  6 * surface 
        
    }
}

const cube = new CubeMakerNew ({ 
    length:5, 
    width: 5, 
    height: 5
})

console.log("****STRETCH**** My new cube extended from CuboidMaker Surface Area:",cube.surfaceArea())//150 
console.log("****STRETCH**** My new cube extended from CuboidMaker Volume:",cube.volume()) //125