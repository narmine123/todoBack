import { Controller } from '@nestjs/common';
import { SkillService } from './skill.service';
import { Body,  Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Skill } from 'src/tache/entities/skill.entity/skill.entity';
import { addSkillDTO } from 'src/tache/dto/addSkillDTO';
import { updateSkillDTO } from 'src/tache/dto/updateSkillDTO';


@Controller('skill')
export class SkillController {
    constructor(private skillService: SkillService){}
    @Get()
    async getAllSkills(): Promise<Skill[]>{
        return await this.skillService.getSkills();
    }
    
    

    @Post()
        async addSkill(@Body() skilldto:addSkillDTO):Promise<Skill>{
            return await this.skillService.addSkill(skilldto)
        }
    
    @Patch(':id')
        async updateSkill(@Body() updateSkilldto:updateSkillDTO ,
        @Param('id', ParseIntPipe)id : number
    ):Promise<Skill>{
            return await this.skillService.updateSkill(id,updateSkilldto);
        }
    
    
    @Delete(':id')
        async  removeSkill(
            @Param('id',ParseIntPipe)id:number
        ){
            return await this.skillService.removeSkill(id);
        }
       
        


    
}
/*

    
        //chercher le nombre de tache par priorité
        @Get('stats')
        async statTacheByPriorité(){
            return await this.tacheService.statTacheByPriorité();
        }
    
        @Post('subtasks')
        addSubTask(@Body() subTask: { title: string; taskId: number }): Promise<SubTask> {
          return this.tacheService.addSubTask(subTask);
        }
        
        @Post('subtasks/debug')
    debugSubTask(@Body() subTask: any): any {
      console.log('Données reçues :', subTask);
      return subTask;
    }
    
    
    
    */
    
    