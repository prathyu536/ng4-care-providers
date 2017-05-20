import * as _ from 'lodash';
import * as express from 'express';
import * as mongoose from 'mongoose';
import User from '../models/user.model';
import {RouteHelper} from '../utils/route.helper';
import {Server, Path, POST, GET, PUT, DELETE, PathParam, ContextRequest, ContextResponse, Return} from 'typescript-rest';

/**
 * @author: Shoukath Mohammed
 */
@Path('/userslist')
export class UserService {
  public helper: RouteHelper = new RouteHelper();

  @POST
  saveUser(
      @ContextRequest req: express.Request,
      @ContextResponse res: express.Response): Return.NewResource<any> {

    const body: any = req.body.data;
    const user = new User({
          fname: body.fname
        , lname: body.lname
        , age: body.age
        , active: body.active || true
        , date: new Date()
    });

    return this.helper.add(user);
  }

  @GET
  @Path(':id')
  getUserById(@PathParam('id') id: any): Promise<any> {
    const query = {_id: id};
    return this.helper.getOne(User, query);
  }

  @GET
  @Path(':name/byName')
  getUserByName(@PathParam('name') name: any): Promise<any> {
    const query = {fname: name};
    return this.helper.getOne(User, query);
  }

  @GET
  getUsers(): Promise<any> {
    return this.helper.getAll(User);
  }

  @PUT
  @Path(':id')
  updateUser(
      @PathParam('id') id: string,
      @ContextRequest req: express.Request) {
    return this.helper.update(User, {_id: id}, req.body.data);
  }

  @DELETE
  @Path(':id')
  removeUser(@PathParam('id') id: string) {
    return this.helper.remove(User, {_id: id});
  }
}
