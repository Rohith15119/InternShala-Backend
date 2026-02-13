import Task from "../models/task.model.js";

/**
 * @desc Create new task
 * @route POST /api/v1/tasks
 * @access Private
 */
export const createTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const task = await Task.create({
      title,
      description,
      userId: req.user.id,
    });

    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Get all tasks (user gets own, admin gets all)
 * @route GET /api/v1/tasks
 * @access Private
 */
export const getTasks = async (req, res, next) => {
  try {
    let tasks;

    if (req.user.role === "admin") {
      tasks = await Task.findAll();
    } else {
      tasks = await Task.findAll({
        where: { userId: req.user.id },
      });
    }

    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Get single task
 * @route GET /api/v1/tasks/:id
 * @access Private
 */
export const getTaskById = async (req, res, next) => {
  try {
    const task = await Task.findOne({
      where: {
        id: req.params.id,
        ...(req.user.role !== "admin" && { userId: req.user.id }),
      },
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Update task
 * @route PUT /api/v1/tasks/:id
 * @access Private
 */
export const updateTask = async (req, res, next) => {
  try {
    const task = await Task.findOne({
      where: {
        id: req.params.id,
        ...(req.user.role !== "admin" && { userId: req.user.id }),
      },
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    await task.update(req.body);

    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Delete task
 * @route DELETE /api/v1/tasks/:id
 * @access Private
 */
export const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findOne({
      where: {
        id: req.params.id,
        ...(req.user.role !== "admin" && { userId: req.user.id }),
      },
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    await task.destroy();

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    next(error);
  }
};
