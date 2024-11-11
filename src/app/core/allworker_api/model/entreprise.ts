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

export interface Entreprise { 
    nom: string;
    adresse: string;
    telephone?: string;
    email: string;
    userType: string;
    password: string;
    siteWeb?: string;
    description?: string;
    typeEntreprise: string;
    secteurActivite: string;
    nui?: string;
}