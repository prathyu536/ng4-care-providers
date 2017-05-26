import * as _ from 'lodash';
import * as express from 'express';
import * as mongoose from 'mongoose';
import User1 from '../models/sign-up.model';
import {RouteHelper} from '../utils/route.helper';
import {Server, Path, POST, GET, PUT, DELETE, PathParam, ContextRequest, ContextResponse, Return} from 'typescript-rest';

/**
 * @author: Shoukath Mohammed
 */
@Path('/registrationlist')
export class SignUpService {
  public helper: RouteHelper = new RouteHelper();

  @POST
  saveUser(
      @ContextRequest req: express.Request,
      @ContextResponse res: express.Response): Return.NewResource<any> {

    const body: any = req.body.data;
    const user1 = new User1({
          firstname: body.firstname
        , middlename: body.middlename
        , lastname: body.lastname
        , gender: body.gender
        , email: body.email
        , pwd: body.pwd
        , cpwd: body.cpwd
        , number: body.number
        , dob: body.dob
        , active: body.active || true
        , date: new Date()
    });
    return this.helper.add(user1);
  }

  @GET
  @Path(':id')
  getUserById(@PathParam('id') id: any): Promise<any> {
    const query = {_id: id};
    return this.helper.getOne(User1, query);
  }

  @GET
  @Path(':name/byName')
  getUserByName(@PathParam('name') name: any): Promise<any> {
    const query = {fname: name};
    return this.helper.getOne(User1, query);
  }

  @GET
  getUsers(): Promise<any> {
    return this.helper.getAll(User1);
  }

  @PUT
  @Path(':id')
  updateUser(
      @PathParam('id') id: string,
      @ContextRequest req: express.Request) {
    return this.helper.update(User1, {_id: id}, req.body.data);
  }

  @DELETE
  @Path(':id')
  removeUser(@PathParam('id') id: string) {
    return this.helper.remove(User1, {_id: id});
  }
}
