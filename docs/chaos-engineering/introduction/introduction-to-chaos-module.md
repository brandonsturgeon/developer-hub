---
sidebar_position: 1
title: Introduction to Chaos Module
---

Cloud native applications are highly distributed, elastic, resistant to failure, and loosely coupled. That being said, an important question arises. How would you ensure that your application performs as expected under different failure conditions?

Enter chaos engineering. 

Chaos engineering is the discipline of performing experiments on a software to build confidence in the system's
capability to withstand turbulent and unexpected conditions. Chaos Engineering is a tool that helps identify weaknesses and misconfiguration in 
the services. It is _relevant for all types of systems (including the legacy applications and infrastructure)_, and particularly important for
cloud native applications that carry multiple points of failure due to their distributed, and elastic nature.
Chaos engineering is a DevOps practise that involves proactive, and controlled experimentation on a system to identify weak points and misconfigurations, gain insights into how the system behaves in turbulent conditions, and improve the system’s resilience. The system typically comprises the application under test and all the components on which it depends, such as databases, networks, infrastructure, and cloud native services.

Chaos engineering is relevant to all types of systems, including legacy applications and infrastructure. However, it assumes greater significance in deployments involving cloud native applications, which inherently carry multiple points of failure because of their distributed and elastic nature.
The standard chaos experimentation flow involves the following steps:
1. Identifying the steady state of the system/application under test;
2. Hypothesizing the consequences of a specific fault or failure;
3. Injecting this fault in a controlled manner (with a pre-determined and often minimal "blast radius");
4. Validating whether the hypothesis is proven and taking appropriate action in case it is not proven, that is, a weakness is found. 

<img width="764" alt="Screenshot 2022-10-10 at 3 49 17 PM" src="https://user-images.githubusercontent.com/21166217/194844911-aaab2502-b729-4214-84fb-70717172d4a8.png"></img>

Needless to say, chaos experiments need the appropriate observability infrastructure to aid the validation of the hypotheses around
steady-state. The practise of chaos engineering consists of repeated experimentation, with varied faults to simulate real-world failure conditions
carried out against different targets.

<img width="544" alt="Screenshot 2022-10-10 at 4 23 22 PM" src="https://user-images.githubusercontent.com/21166217/194850472-0f4dda25-74f5-4dbb-86e8-45e09258de73.png"></img>

## Typical chaos experimentation workflow
Chaos experiments target a steady-state system and simulate conditions that might induce failure in components such as infrastructure, networks, and services. For example, a Chaos experiment might terminate a pod in a functional Kubernetes cluster, shut down a working load balancer to validate failover, or induce CPU spikes on a server, and then observe how the system responds.

In a chaos experiment, you typically perform the following tasks:
1. Define and apply a steady state to the test system and specify its service-level objectives (SLOs).
2. Develop a hypothesis on the system's behaviour if you inject a specific fault.
3. Inject the fault.
4. Observe whether the system continues to meet the SLOs.

![Chaos Engineering Overview](./static/first-chaos/chaos-engineering-overview.png)


## Left-Shift Chaos Engineering

The initial principles of chaos engineering advocate performing experiments in production (which is relevant and recommended), which is being viewed as a means to validate resilience beforehand, that is, as a quality gate for big deployment environments. 
Generally, this is fueled by a need to build confidence in a highly dynamic environment in which application services _and_ infrastructure 
are subject to frequent, and independent upgrades. The resulting paradigm is:  

- Increased ad-hoc/exploratory chaos testing by application developers and QA teams; 
- Automating chaos experiments within continuous delivery (CD) pipelines.


## Benefits of Harness Chaos Engineering 

Harness Chaos Engineering module takes a holistic-approach to chaos engieering, and doesn't merely focus on fault-injection. It is designed to help users setup a fully-operational chaos function that is based on the original [principles of chaos](https://principlesofchaos.org/) as well as addressing several enterprise needs around its practice, which include:

1. Cloud native approach to chaos engineering which supports declarative definition of experiments and Git-based chaos artifact sources (chaos-experiments-as-code).
2. Extensive fault library and robust suite of ready-to-use experiments, with support to construct complex custom experiments with multiple faults in the desired order.
3. Centralized control plane which supports varied targets (Kubernetes-based microservices, cloud services, VMware infrastructure). 
4. Governance enforcement for chaos experimentation using dedicated workspaces, chaos teams, and access control.
5. Native integration with Harness CD (Continuous Delivery) pipelines.
6. Hypothesis validation using probes and SLO management using integration with Harness CV (Continuous Verification).
7. Guided gameday execution with detailed analytics and reporting based on experiment execution and application resilience.
8. Chaos events, metrics and logs (audit and execution) to aid in the instrumentation of APM dashboards with chaos context.
