import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'truncate'
})

export class TruncatePipe implements PipeTransform{

transform(value: string, ...args: unknown[]): unknown{
    console.log(">>>>>>>>>> Pipe >>>>>>>>>>");
    console.log(value, args);
    return value.substring(0, args[0] as number ) + " ...";
}

}