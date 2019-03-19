  <!-- Left side column. contains the sidebar -->
  <aside class="main-sidebar">
      <!-- sidebar: style can be found in sidebar.less -->
      <section class="sidebar">
          <!-- Sidebar user panel -->
          <div class="user-panel">

              <div class="info">
                  <p><?php echo $_SESSION['nombre']; ?></p>
                  <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
              </div>
          </div>
          <!-- search form -->
          <form action="#" method="get" class="sidebar-form">
              <div class="input-group">
                  <input type="text" name="q" class="form-control" placeholder="Buscar...">
                  <span class="input-group-btn">
                      <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                      </button>
                  </span>
              </div>
          </form>
          <!-- /.search form -->
          <!-- sidebar menu: : style can be found in sidebar.less -->
          <ul class="sidebar-menu" data-widget="tree">
              <li class="header">Menú de Administración</li>
              <li class="treeview">
                  <a href="#"><i class="fas fa-tachometer-alt"></i> <span>Dashboard</span>
                      <span class="pull-right-container">
                          <i class="fa fa-angle-left pull-right"></i>
                      </span>
                  </a>
                  <ul class="treeview-menu">
                      <li><a href="dashboard.php"><i class="far fa-circle"></i> Dashboard</a></li>
                  </ul>
              </li>

              <li class="treeview">
                  <a href="#">
                      <i class="fas fa-calendar-alt"></i> <span>Eventos</span>
                      <i class="fa fa-angle-left pull-right"></i>
                  </a>
                  <ul class="treeview-menu">
                      <li><a href="lista-evento.php"><i class="fas fa-list-ul"></i> Ver Todos</a></li>
                      <li><a href="crear-evento.php"><i class="fas fa-plus-circle"></i> Agregar</a></li>
                  </ul>
              </li>

              <li class="treeview">
                  <a href="#">
                      <i class="fas fa-book"></i> <span>Categoria Eventos</span>
                      <i class="fa fa-angle-left pull-right"></i>
                  </a>
                  <ul class="treeview-menu">
                      <li><a href="lista-categorias.php"><i class="fas fa-list-ul"></i> Ver Todos</a></li>
                      <li><a href="crear-categoria.php"><i class="fas fa-plus-circle"></i> Agregar</a></li>
                  </ul>
              </li>

              <li class="treeview">
                  <a href="#">
                      <i class="fas fa-user-circle"></i> <span> Invitados</span>
                      <i class="fa fa-angle-left pull-right"></i>
                  </a>
                  <ul class="treeview-menu">
                      <li><a href="lista-invitados.php"><i class="fas fa-list-ul"></i> Ver Todos</a></li>
                      <li><a href="crear-invitado.php"><i class="fas fa-plus-circle"></i> Agregar</a></li>
                  </ul>
              </li>

              <li class="treeview">
                  <a href="#">
                      <i class="fas fa-address-card"></i> <span> Registrados</span>
                      <i class="fa fa-angle-left pull-right"></i>
                  </a>
                  <ul class="treeview-menu">
                      <li><a href="lista-registrados.php"><i class="fas fa-list-ul"></i> Ver Todos</a></li>
                      <li><a href="crear-registro.php"><i class="fas fa-plus-circle"></i> Agregar</a></li>
                  </ul>
              </li>

              <?php if ($_SESSION['nivel'] == 1) : ?>
              <li class="treeview">
                  <a href="#">
                      <i class="fas fa-user-tie"></i> <span> Administradores</span>
                      <i class="fa fa-angle-left pull-right"></i>
                  </a>
                  <ul class="treeview-menu">
                      <li><a href="lista-admin.php"><i class="fas fa-list-ul"></i> Ver Todos</a></li>
                      <li><a href="crear-admin.php"><i class="fas fa-plus-circle"></i> Agregar</a></li>
                  </ul>
              </li>
              <?php endif; ?>

              <li class="treeview">
                  <a href="#">
                      <i class="fas fa-comments"></i> <span> Testimoniales</span>
                      <i class="fa fa-angle-left pull-right"></i>
                  </a>
                  <ul class="treeview-menu">
                      <li><a href="#"><i class="fas fa-list-ul"></i> Ver Todos</a></li>
                      <li><a href="#"><i class="fas fa-plus-circle"></i> Agregar</a></li>
                  </ul>
              </li>
          </ul>
      </section>
      <!-- /.sidebar -->
  </aside>

  <!-- =============================================== --> 