import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { TacheService } from './tache.service';
import { TacheEntity } from './entities/tache.entity/tache.entities';
import { addTacheDTO } from './dto/addTacheDTO';
import { updateTacheDTO } from './dto/updateTacheDTO';

@Controller('tache')
export class TacheController {

    constructor(private tacheService: TacheService
    ){
    }

    @Get()
    async getAllTaches(): Promise<TacheEntity[]>{
        return await this.tacheService.getTaches();
    }

    /*@Get(":id")
    async getTache(
        @Param('id') id
    )
    : Promise<TacheEntity>{
        return await this.tacheService.findTacheById(id);
    }*/

    @Post()
    async addTache(@Body() tachedto:addTacheDTO):Promise<TacheEntity>{
        return await this.tacheService.addTache(tachedto)
    }

    @Patch(':id')
    async updateTache(@Body() updateTachedto:updateTacheDTO ,
    @Param('id', ParseIntPipe)id : number
):Promise<TacheEntity>{
        return await this.tacheService.updateTache(id,updateTachedto);
    }
    

    @Delete(':id')
    async  removeTache(
        @Param('id',ParseIntPipe)id:number
    ){
        return await this.tacheService.removeTache(id);
    }
   

    //chercher le nombre de tache par priorité
    @Get('stats')
    async statTacheByPriorité(){
        return await this.tacheService.statTacheByPriorité();
    }
}

