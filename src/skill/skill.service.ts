import { Injectable, NotFoundException } from '@nestjs/common';
import { Skill } from 'src/tache/entities/skill.entity/skill.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { addSkillDTO } from 'src/tache/dto/addSkillDTO';
import { updateSkillDTO } from 'src/tache/dto/updateSkillDTO';


@Injectable()
export class SkillService {
    constructor(
    @InjectRepository(Skill)
    private skillRepository : Repository<Skill>,){}

    async getSkills(): Promise<Skill[]>{
        return await  this.skillRepository.find()
    }
    async addSkill(skilldto: addSkillDTO): Promise<Skill> {
        console.log('DTO reçu:', skilldto);  // Log de la donnée reçue
        const newSkill = this.skillRepository.create(skilldto);
        console.log('skill créée:', newSkill);  // Log de l'entité créée
        return await this.skillRepository.save(newSkill);
      }
    async updateSkill(id: number, Skill: updateSkillDTO): Promise<Skill> {
        // On récupère la tâche d'ID donné et on remplace les anciennes valeurs par les nouvelles passées en paramétre 
        const newSkill = await this.skillRepository.preload({//preload utilise l'id pour trouver l'entité correspondante dans la base de données.
        //Si aucune entité avec cet id n'est trouvée, preload renverra null.
            id, // Identifie l'entité à précharger
            ...Skill// Fusionne les nouvelles données avec les anciennes
        });
        //tester le cas ou la tache d'id id n'existe pas
        if(! newSkill){
            throw new NotFoundException(`skill d'id ${id} n'existe pas` );
        }
        
        return await this.skillRepository.save(newSkill); // Sauvegarde l'entité
    }

    async removeSkill(id: number) {
        // Recherche de la tâche à supprimer
        const skilltoRemove = await this.skillRepository.findOne({ where: { id } });
    
        // Gestion du cas où la tâche n'existe pas
        if (!skilltoRemove) {
            throw new NotFoundException(` skill d'id ${id} n'existe pas`);
        }
    
        // Suppression de la tâche
        return await this.skillRepository.remove(skilltoRemove);
    }

}

    
    
