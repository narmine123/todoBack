import { Body, Injectable, NotFoundException, Param, Patch } from '@nestjs/common';
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


    // Récupérer toutes les compétences
  async getAllSkills(): Promise<Skill[]> {
    return this.skillRepository.find();
  }


  /*async updateProgress(skillId: number, niveauAct: number, progress: number): Promise<Skill> {
    try {
      const skill = await this.skillRepository.findOneBy({ id: skillId });
      if (!skill) {
        throw new NotFoundException('Compétence non trouvée');
      }
  
      // Mise à jour du progrès
      skill.progress = progress;
  
      // Si le progrès atteint 100%, on incrémente le niveau
      if (progress === 100) {
        skill.niveauAct = niveauAct + 1;  // Incrémenter le niveau actuel
      }
  
      // Enregistrer la compétence mise à jour dans la base de données
      const updatedSkill = await this.skillRepository.save(skill);
      console.log('Skill après mise à jour: ', updatedSkill);  // Vérifier l'entité sauvegardée
      return updatedSkill;
    } catch (error) {
      console.error('Erreur lors de la mise à jour du progrès: ', error);
      throw error;  // Re-throw the error to handle it in the controller if needed
    }
  }*/
    async updateProgress(skillId: number, niveauAct: number, progress: number): Promise<Skill> {
        const skill = await this.skillRepository.findOneBy({ id: skillId });
        if (!skill) {
          throw new NotFoundException('Compétence non trouvée');
        }
      
        // Mise à jour de la compétence avec progress et niveauAct
        skill.progress = progress;
        skill.niveauAct = niveauAct;  // Assurez-vous que 'niveauAct' est bien mis à jour
        
        return this.skillRepository.save(skill);  // Sauvegarde la compétence mise à jour
      }
      
  
  
}

    
    
