import {Stdt, FrStdt} from "./exercise3.mjs";
import fs from "fs";


export class Prmtn{
    constructor(){
        this.students = [];
    }

    add(student){
        this.students.push(student);
    }

    size(){
        return this.students.length;
    }

    get(i){
        return this.student[i+1];
    }

    print(){
        let output = ""
        this.students.forEach(student => {
            output += student.toString() + "\n";
        });

    }

    write(){
        return JSON.stringify(this.students);
    }

    read(str) {
        const students = JSON.parse(str);
        this.students = students.map((student) => {
          if (student.nationality) {
            return new FrStdt(student.lastName, student.firstName, student.id, student.nationality);
          } else {
            return new Stdt(student.lastName, student.firstName, student.id);
          }
        });
    }
    
      saveFile(fileName) {
        const data = this.write();
        fs.writeFileSync(fileName, data);
    }
    
      readFrom(fileName) {
        const data = fs.readFileSync(fileName);
        this.read(data);
    }
}
