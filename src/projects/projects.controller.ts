import { Controller, Get, Post, Body, Param, Put, Delete, Request, UseGuards, Patch, ParseIntPipe } from '@nestjs/common';
import { ProyectosService } from './projects.service';
import { Proyecto } from './entities/projects.entity';
import { CreateProjectDto } from './dto/create-projects';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { UpdateProjectDto } from './dto/update-project-dto';

@Controller('proyectos')
export class ProyectosController {
  constructor(private readonly proyectosService: ProyectosService) {}

  @Get()
  findAll(): Promise<Proyecto[]> {
    return this.proyectosService.findAll();
  }

  @Get()
  @UseGuards(AuthGuard)
  async getProjectsByUser(@Request() req) {
    const userId = req.user.id;
    return this.proyectosService.getProjectsByUser(userId);
  }

  
  @Post('crearProyecto')
  @UseGuards(AuthGuard)
  async create(@Request() req, @Body() proyectoData: CreateProjectDto) {
    const userId = req.user.id;
    console.log("controlador",userId)
    const { name, descripcion } = proyectoData;
    const proyecto = await this.proyectosService.createProject(userId, name, descripcion);
    return proyecto;
  }
  @Delete(':name')
  @UseGuards(AuthGuard)
  async delete(@Request() req, @Param('name') proyectoId: string) {
    const userId = req.user.id;
    const result = await this.proyectosService.deleteProject(userId, proyectoId);
    return { success: result };
  }

  @Patch('editproject/:projectId')
  @UseGuards(AuthGuard)
  async update(@Request() req, @Param('projectId', ParseIntPipe) projectId: number, @Body() proyectoData: UpdateProjectDto) {
    const userId = req.user.id;
    const result = await this.proyectosService.updateProject(userId, proyectoData, projectId);
    return { success: result };
  }
        
}