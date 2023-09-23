package com.mlprograms.todo.config;

import com.mlprograms.todo.entity.Todo;
import org.springframework.context.annotation.Configuration;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelProcessor;

@Configuration
public class MyEntityProcessor implements RepresentationModelProcessor<EntityModel<Todo>> {

    @Override
    public EntityModel<Todo> process(EntityModel<Todo>model){
        return EntityModel.of(model.getContent());
    }
}
