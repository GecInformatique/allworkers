/**
 * API Candidats
 * API pour la gestion des candidats
 *
 * OpenAPI spec version: v1
 * Contact: contact@votreapi.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Education } from './education';
import { Experience } from './experience';
import { Tache } from './tache';

export interface CustomUser { 
    readonly id?: number;
    nom: string;
    prenom: string;
    email: string;
    sexe: CustomUser.SexeEnum;
    dateNaissance?: string;
    lieuNaissance?: string;
    telephone?: string;
    address?: string;
    country?: string;
    city?: string;
    region?: string;
    departement?: string;
    statutMatrimonial?: CustomUser.StatutMatrimonialEnum;
    nombreEnfant?: number;
    cni?: string;
    dateDelivrance?: string;
    niu?: string;
    contact?: string;
    password?: string;
    disponibilite?: boolean;
    zoneGeographique?: string;
    statut?: string;
    readonly photo?: string;
    nationalite?: string;
    langueParle?: string;
    typeDisponibility?: string;
    longitude?: number;
    latitude?: number;
    statusUser?: CustomUser.StatusUserEnum;
    statusReceiverNotificationJob?: boolean;
    website?: string;
    overview?: string;
    rating?: number;
    emailVerifiedAt?: Date;
    lastConnection?: Date;
    rememberToken?: string;
    linkGoogle?: string;
    linkTwitter?: string;
    linkFacebook?: string;
    linkLinkedin?: string;
    linkInstagram?: string;
    readonly qrCode?: string;
    enable?: boolean;
    isPartner?: boolean;
    publishedOnline?: boolean;
    readonly picture?: string;
    profileUpdate?: Date;
    profileVerifyByAdmin?: boolean;
    /**
     * Designates whether this user should be treated as active. Unselect this instead of deleting accounts.
     */
    isActive?: boolean;
    /**
     * Designates whether the user can log into this admin site.
     */
    isStaff?: boolean;
    readonly profileCertificate?: string;
    domaine?: string;
    profession?: string;
    specialite?: string;
    competence?: string;
    readonly educations?: Array<Education>;
    readonly taches?: Array<Tache>;
    readonly experiences?: Array<Experience>;
    readonly createdAt?: Date;
    readonly updatedAt?: Date;
}
export namespace CustomUser {
    export type SexeEnum = 'M' | 'F';
    export const SexeEnum = {
        M: 'M' as SexeEnum,
        F: 'F' as SexeEnum
    };
    export type StatutMatrimonialEnum = 'celibataire' | 'marie' | 'divorce' | 'veuf';
    export const StatutMatrimonialEnum = {
        Celibataire: 'celibataire' as StatutMatrimonialEnum,
        Marie: 'marie' as StatutMatrimonialEnum,
        Divorce: 'divorce' as StatutMatrimonialEnum,
        Veuf: 'veuf' as StatutMatrimonialEnum
    };
    export type StatusUserEnum = 'available' | 'busy' | 'not_available';
    export const StatusUserEnum = {
        Available: 'available' as StatusUserEnum,
        Busy: 'busy' as StatusUserEnum,
        NotAvailable: 'not_available' as StatusUserEnum
    };
}