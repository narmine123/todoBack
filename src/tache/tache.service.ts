import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TacheEntity } from './entities/tache.entity/tache.entities';
import { Repository } from 'typeorm';
import { addTacheDTO } from './dto/addTacheDTO';
import { updateTacheDTO } from './dto/updateTacheDTO';


@Injectable()
export class TacheService {
    constructor(
    @InjectRepository(TacheEntity)
    private tacheRepository : Repository<TacheEntity>
){}
    async getTaches(): Promise<TacheEntity[]>{
        return await  this.tacheRepository.find()
    }
    async addTache(tachedto: addTacheDTO): Promise<TacheEntity> {
        console.log('DTO reçu:', tachedto);  // Log de la donnée reçue
        const newTache = this.tacheRepository.create(tachedto);
        console.log('Tâche créée:', newTache);  // Log de l'entité créée
        return await this.tacheRepository.save(newTache);
      }
      

    async updateTache(id: number, Tache: updateTacheDTO): Promise<TacheEntity> {
        // On récupère la tâche d'ID donné et on remplace les anciennes valeurs par les nouvelles passées en paramétre 
        const newTache = await this.tacheRepository.preload({//preload utilise l'id pour trouver l'entité correspondante dans la base de données.
//Si aucune entité avec cet id n'est trouvée, preload renverra null.
            id, // Identifie l'entité à précharger
            ...Tache // Fusionne les nouvelles données avec les anciennes
        });
        //tester le cas ou la tache d'id id n'existe pas
        if(! newTache){
            throw new NotFoundException(`La tache d'id ${id} n'existe pas` );
        }
        
        return await this.tacheRepository.save(newTache); // Sauvegarde l'entité
    }

    async removeTache(id: number) {
        // Recherche de la tâche à supprimer
        const tachetoRemove = await this.tacheRepository.findOne({ where: { id } });
    
        // Gestion du cas où la tâche n'existe pas
        if (!tachetoRemove) {
            throw new NotFoundException(`La tâche d'id ${id} n'existe pas`);
        }
    
        // Suppression de la tâche
        return await this.tacheRepository.remove(tachetoRemove);
    }

    async statTacheByPriorité(){
        //créer un querry builder
        const qb = this.tacheRepository.createQueryBuilder("tache");
        //chercher le nombre de tache par priorité
         qb.select("tache.priorité, count(tache.id) as nombreDeTache" )
        .groupBy("tache.priorité");
        console.log(qb.getSql())
        return await qb.getRawMany();
    }

  
    
    
}

//a fonction asynchrone getTaches() attend effectivement la réponse avant de retourner la valeur
