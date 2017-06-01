import * as _ from 'lodash';
import * as mongoose from 'mongoose';
import {Return} from 'typescript-rest';

/**
 * @author: Shoukath Mohammed
 */
export class RouteHelper {

  add(col: mongoose<collection>, cb?: Function): Return.NewResource<any> {
    return col.save((err, doc) => {
        if (err) { return err; }
        return new Return.NewResource<any>(null,
        cb ? cb(doc)
           : {
                data: doc
            }
        );
    });
  }

  getAll(Col: mongoose<Schema>, cb?: Function, errMsg?: string): Promise<any> {
    return new Promise<any>(
    (resolve, reject) => {
      Col.find({},
        (err, doc) => {
            (!doc)
            ? reject(err || errMsg || 'Sorry the request cannot be completed.')
            : resolve(
                  cb ? cb(doc) : {
                  data: doc,
                  total: doc.length
                }
            );
        });
     });
  }

  getOne(Col: mongoose<Schema>, query: object, cb?: Function, errMsg?: string): Promise<any> {
    return new Promise<any>(
    (resolve, reject) => {
      Col.findOne(query,
        (err, doc) => {
            (!doc)
            ? reject(err || errMsg || 'Sorry the request cannot be completed.')
            : resolve(cb ? cb(doc) : doc);
        });
     });
  }

  update(Col: mongoose<Schema>, query: object, data: object, cb?: Function): Promise<any> {
    return new Promise<any>(
        (resolve, reject) => {
            Col.findOneAndUpdate(query, data, {upsert: true, new: true},
            (err, doc) => {
                (!doc)
                ? reject(err || 'Sorry the request cannot be completed.')
                : resolve(cb ? cb(doc) : doc);
            });
        }
    );
  }

  remove(Col: mongoose<Schema>, query: object, cb?: Function): Promise<any> {
    return new Promise<any>(
        (resolve, reject) => {
            Col.remove(query,
            (err, doc) => {
                (!doc)
                ? reject(err || 'Sorry the request cannot be completed.')
                : resolve(cb ? cb(doc) : doc);
            });
        }
    );
  }
}
